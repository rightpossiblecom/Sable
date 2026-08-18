import React from "react";

export const dynamic = 'force-dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { 
  Plus,
  CreditCard,
  Building,
  TrendingUp,
  TrendingDown,
  Eye,
  Settings,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { getUserAccounts } from "@/actions/dashboard";
import { getUserTransactions } from "@/actions/transaction";
import { CreateAccountDrawer } from "@/components/create-account-drawer";

const AccountPage = async () => {
  // Get real account data
  const accounts = await getUserAccounts() || [];
  
  // Get real transaction data for recent activity
  const transactionsResponse = await getUserTransactions();
  const allTransactions = transactionsResponse.success ? transactionsResponse.data : [];
  
  // Calculate account stats
  const accountStats = {
    totalBalance: accounts.reduce((sum, acc) => sum + acc.balance, 0),
    totalAccounts: accounts.length,
    currentAccounts: accounts.filter(acc => acc.type === "CURRENT").length,
    savingsAccounts: accounts.filter(acc => acc.type === "SAVINGS").length
  };

  // Get recent activity
  const recentActivity = allTransactions.slice(0, 4).map(transaction => ({
    account: transaction.account?.name || 'Unknown Account',
    type: transaction.type.toLowerCase(),
    amount: transaction.amount,
    description: transaction.description || 'No description',
    date: transaction.date
  }));

  // Enhanced account data with calculated fields
  const accounts_data = accounts.map(account => {
    // Get transactions for this account
    const accountTransactions = allTransactions.filter(t => t.accountId === account.id);
    const lastTransaction = accountTransactions.length > 0 ? accountTransactions[0].date : account.createdAt;
    
    // Mock monthly change calculation - you'd calculate this from actual historical data
    const mockChange = Math.random() * 10 - 5; // Random change between -5% and +5%
    
    return {
      ...account,
      transactions: account._count?.transactions || accountTransactions.length,
      lastTransaction,
      monthlyChange: Math.abs(mockChange),
      changeType: mockChange >= 0 ? "positive" : "negative"
    };
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Management</h1>
          <p className="text-gray-600 mt-2">Comprehensive financial portfolio oversight and strategic allocation</p>
        </div>
        <div className="flex items-center space-x-2">
          <CreateAccountDrawer>
            <Button variant="outline" className="flex items-center space-x-2">
              <Plus size={16} />
              <span>Quick Add</span>
            </Button>
          </CreateAccountDrawer>
          <Link href="/account/create">
            <Button className="flex items-center space-x-2">
              <Plus size={16} />
              <span>Create Portfolio</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Account Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Total Assets</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${accountStats.totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-full">
                <CreditCard size={24} className="text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Active Portfolios</p>
                <p className="text-2xl font-bold text-gray-900">{accountStats.totalAccounts}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <Building size={24} className="text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Operational Accounts</p>
                <p className="text-2xl font-bold text-gray-900">{accountStats.currentAccounts}</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-full">
                <CreditCard size={24} className="text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Investment Accounts</p>
                <p className="text-2xl font-bold text-gray-900">{accountStats.savingsAccounts}</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-full">
                <Building size={24} className="text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {accounts.length === 0 ? (
          <Card className="lg:col-span-2">
            <CardContent className="py-12 text-center">
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <CreditCard size={24} className="text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">No portfolios configured</h3>
                  <p className="text-gray-600">Initialize your financial portfolio management system</p>
                </div>
                <Link href="/account/create">
                  <Button>
                    <Plus size={16} className="mr-2" />
                    Initialize Portfolio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          accounts_data.map((account) => (
          <Card key={account.id} className="relative">
            {account.isDefault && (
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Default
                </Badge>
              </div>
            )}
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    account.type === "CURRENT" ? "bg-blue-100" : "bg-green-100"
                  }`}>
                    {account.type === "CURRENT" ? 
                      <CreditCard size={20} className="text-blue-600" /> :
                      <Building size={20} className="text-green-600" />
                    }
                  </div>
                  <div>
                    <CardTitle className="text-lg">{account.name}</CardTitle>
                    <CardDescription>
                      {account.type === "CURRENT" ? "Operational Portfolio" : "Investment Portfolio"}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Balance */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm text-gray-600">Asset Valuation</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                    <div className="flex items-center space-x-1">
                      {account.changeType === "positive" ? (
                        <TrendingUp size={14} className="text-green-500" />
                      ) : (
                        <TrendingDown size={14} className="text-red-500" />
                      )}
                      <span className={`text-sm ${
                        account.changeType === "positive" ? "text-green-600" : "text-red-600"
                      }`}>
                        {account.changeType === "positive" ? "+" : ""}{account.monthlyChange}%
                      </span>
                      <span className="text-sm text-gray-500">this month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Summary */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Monthly Activity</p>
                  <p className="font-medium text-gray-900">{account.transactions}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-sm text-gray-600">Last activity</p>
                  <p className="font-medium text-gray-900">
                    {new Date(account.lastTransaction).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4">
                <Link href={`/account/${account.id}`} className="flex-1">
                  <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                    <Eye size={16} />
                    <span>Portfolio Analysis</span>
                  </Button>
                </Link>
                <Button variant="outline" size="icon">
                  <Settings size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
          ))
        )}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Portfolio Activity Intelligence</CardTitle>
              <CardDescription>Real-time financial activity monitoring across all portfolios</CardDescription>
            </div>
            <Link href="/transaction">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <span>View All</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No recent activity. <Link href="/transaction/create" className="text-blue-600 hover:underline">Add your first transaction</Link>
              </div>
            ) : (
              recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.type === "income" ? "bg-green-500" : "bg-red-500"
                    }`}></div>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">{activity.description}</p>
                      <p className="text-sm text-gray-600">{activity.account}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className={`font-medium ${
                      activity.type === "income" ? "text-green-600" : "text-red-600"
                    }`}>
                      {activity.type === "income" ? "+" : "-"}${activity.amount.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountPage;
