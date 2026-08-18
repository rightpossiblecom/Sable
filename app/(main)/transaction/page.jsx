import React from "react";

export const dynamic = 'force-dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus,
  Search,
  Filter,
  Download,
  TrendingUp,
  TrendingDown,
  Calendar,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";
import Link from "next/link";
import { getUserTransactions } from "@/actions/transaction";
import { getUserAccounts } from "@/actions/dashboard";

const TransactionPage = async () => {
  // Get real transaction data
  const transactionsResponse = await getUserTransactions();
  const transactions = transactionsResponse.success ? transactionsResponse.data : [];
  
  // Get accounts for filtering
  const accounts = await getUserAccounts();

  // Calculate transaction stats
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  const thisMonthTransactions = transactions.filter(t => {
    const transactionDate = new Date(t.date);
    return transactionDate.getMonth() === currentMonth && 
           transactionDate.getFullYear() === currentYear;
  });

  const totalIncome = thisMonthTransactions
    .filter(t => t.type === "INCOME")
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalExpenses = thisMonthTransactions
    .filter(t => t.type === "EXPENSE")
    .reduce((sum, t) => sum + t.amount, 0);
    
  const pendingTransactions = transactions.filter(t => t.status === "PENDING");
  const pendingAmount = pendingTransactions.reduce((sum, t) => sum + t.amount, 0);

  const netAmount = totalIncome - totalExpenses;
  const transactionStats = [
    {
      title: "Net Cash Flow",
      amount: `${netAmount >= 0 ? '+' : '-'}$${Math.abs(netAmount).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      change: "+12.5%",
      type: netAmount >= 0 ? "positive" : "negative",
      icon: netAmount >= 0 ? TrendingUp : TrendingDown
    },
    {
      title: "Total Revenue",
      amount: `$${totalIncome.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, 
      change: "+8.2%",
      type: "positive",
      icon: ArrowUpRight
    },
    {
      title: "Total Expenditure",
      amount: `$${totalExpenses.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      change: "-3.1%",
      type: "positive",
      icon: ArrowDownLeft
    },
    {
      title: "Pending Authorization",
      amount: `$${pendingAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      change: `${pendingTransactions.length} transaction${pendingTransactions.length !== 1 ? 's' : ''}`,
      type: "neutral",
      icon: Calendar
    }
  ];

  // Get unique categories for filtering
  const categories = [...new Set(transactions.map(t => t.category))].filter(Boolean);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transaction Intelligence</h1>
          <p className="text-gray-600 mt-2">Advanced financial transaction monitoring and analysis</p>
        </div>
        <Link href="/transaction/create">
          <Button className="flex items-center space-x-2">
            <Plus size={16} />
            <span>Record Transaction</span>
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {transactionStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">{stat.amount}</p>
                      <div className="flex items-center space-x-1">
                        <span className={`text-sm font-medium ${
                          stat.type === "positive" ? "text-green-600" : 
                          stat.type === "negative" ? "text-red-600" : "text-gray-600"
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-full">
                    <Icon size={24} className="text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Financial Activity Log</CardTitle>
              <CardDescription>Comprehensive transaction monitoring and intelligence</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download size={16} className="mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-3 text-gray-400" />
              <Input 
                placeholder="Search transactions..." 
                className="pl-10"
              />
            </div>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>All Accounts</option>
              {accounts?.map(account => (
                <option key={account.id} value={account.id}>{account.name}</option>
              ))}
            </select>
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 font-medium text-gray-900">Description</th>
                  <th className="text-left py-3 font-medium text-gray-900">Category</th>
                  <th className="text-left py-3 font-medium text-gray-900">Account</th>
                  <th className="text-right py-3 font-medium text-gray-900">Amount</th>
                  <th className="text-center py-3 font-medium text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-gray-500">
                      No transactions found. <Link href="/transaction/create" className="text-blue-600 hover:underline">Add your first transaction</Link>
                    </td>
                  </tr>
                ) : (
                  transactions.slice(0, 10).map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 text-sm text-gray-600">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            transaction.type === "INCOME" ? "bg-green-500" : "bg-red-500"
                          }`}></div>
                          <span className="font-medium text-gray-900">{transaction.description || 'No description'}</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm text-gray-600">{transaction.category}</td>
                      <td className="py-4 text-sm text-gray-600">{transaction.account?.name}</td>
                      <td className={`py-4 text-right font-medium ${
                        transaction.type === "INCOME" ? "text-green-600" : "text-red-600"
                      }`}>
                        {transaction.type === "INCOME" ? "+" : ""}${transaction.amount.toFixed(2)}
                      </td>
                      <td className="py-4 text-center">
                        <Badge 
                          variant={transaction.status === "COMPLETED" ? "default" : "secondary"}
                          className={transaction.status === "COMPLETED" ? "bg-green-100 text-green-800" : ""}
                        >
                          {transaction.status.toLowerCase()}
                        </Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {transactions.length > 10 && (
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-600">
                Showing 1 to {Math.min(10, transactions.length)} of {transactions.length} transactions
              </p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionPage;
