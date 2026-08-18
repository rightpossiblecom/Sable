import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Crown, Check, AlertCircle, Calendar, CreditCard } from "lucide-react";

const SubscriptionPage = () => {
  // Mock subscription data
  const currentPlan = {
    name: "Pro",
    price: 29,
    billing: "monthly",
    features: [
      "Unlimited transactions",
      "Advanced analytics",
      "Export to CSV/PDF",
      "Multiple accounts",
      "Email support",
      "Budget tracking"
    ]
  };

  const usage = {
    transactions: { used: 847, limit: 1000 },
    accounts: { used: 3, limit: 10 },
    exports: { used: 12, limit: 50 }
  };

  const billingHistory = [
    { date: "2024-12-01", amount: 29, status: "paid", invoice: "#INV-001" },
    { date: "2024-11-01", amount: 29, status: "paid", invoice: "#INV-002" },
    { date: "2024-10-01", amount: 29, status: "paid", invoice: "#INV-003" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Subscription</h1>
        <p className="text-gray-600 mt-2">Manage your subscription and billing information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Crown className="text-yellow-500" size={24} />
                  <CardTitle>Current Plan</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentPlan.name}</h3>
                <p className="text-gray-600">
                  ${currentPlan.price}/{currentPlan.billing}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Plan Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button variant="outline">Change Plan</Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Overview */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Usage This Month</CardTitle>
              <CardDescription>Your current usage across all features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Transactions</span>
                  <span>{usage.transactions.used}/{usage.transactions.limit}</span>
                </div>
                <Progress value={(usage.transactions.used / usage.transactions.limit) * 100} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Accounts</span>
                  <span>{usage.accounts.used}/{usage.accounts.limit}</span>
                </div>
                <Progress value={(usage.accounts.used / usage.accounts.limit) * 100} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Exports</span>
                  <span>{usage.exports.used}/{usage.exports.limit}</span>
                </div>
                <Progress value={(usage.exports.used / usage.exports.limit) * 100} />
              </div>

              <div className="pt-2">
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <Check size={16} />
                  <span>You&apos;re well within your limits</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Billing Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard size={20} />
              <span>Payment Method</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-500">Expires 12/25</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Update</Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Billing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>Next Billing</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-gray-900">Jan 1, 2025</div>
              <div className="text-gray-600">$29.00 will be charged</div>
              <Button variant="outline" className="mt-4" size="sm">
                View Invoice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Your recent billing and payment history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 font-medium text-gray-900">Amount</th>
                  <th className="text-left py-3 font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 font-medium text-gray-900">Invoice</th>
                  <th className="text-right py-3 font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((bill, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3 text-gray-600">{bill.date}</td>
                    <td className="py-3 text-gray-900 font-medium">${bill.amount}.00</td>
                    <td className="py-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {bill.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-gray-600">{bill.invoice}</td>
                    <td className="py-3 text-right">
                      <Button variant="ghost" size="sm">Download</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionPage;
