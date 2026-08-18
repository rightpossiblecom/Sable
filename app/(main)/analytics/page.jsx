import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const AnalyticsPage = () => {
  // Mock analytics data
  const metrics = [
    {
      title: "Total Income",
      value: "$12,450",
      change: "+12.5%",
      changeType: "positive",
      icon: TrendingUp,
      description: "vs last month"
    },
    {
      title: "Total Expenses",
      value: "$8,320",
      change: "-3.2%",
      changeType: "positive",
      icon: TrendingDown,
      description: "vs last month"
    },
    {
      title: "Net Savings",
      value: "$4,130",
      change: "+18.7%",
      changeType: "positive",
      icon: DollarSign,
      description: "vs last month"
    },
    {
      title: "Avg. Daily Spend",
      value: "$276",
      change: "-5.1%",
      changeType: "positive",
      icon: BarChart3,
      description: "vs last month"
    }
  ];

  const categorySpending = [
    { category: "Food & Dining", amount: 2340, percentage: 28, color: "bg-blue-500" },
    { category: "Transportation", amount: 1680, percentage: 20, color: "bg-green-500" },
    { category: "Shopping", amount: 1420, percentage: 17, color: "bg-yellow-500" },
    { category: "Bills & Utilities", amount: 1250, percentage: 15, color: "bg-red-500" },
    { category: "Entertainment", amount: 830, percentage: 10, color: "bg-purple-500" },
    { category: "Others", amount: 800, percentage: 10, color: "bg-gray-500" }
  ];

  const monthlyTrends = [
    { month: "Jul", income: 11200, expenses: 8500 },
    { month: "Aug", income: 11800, expenses: 8200 },
    { month: "Sep", income: 12100, expenses: 8600 },
    { month: "Oct", income: 11900, expenses: 8100 },
    { month: "Nov", income: 12300, expenses: 8400 },
    { month: "Dec", income: 12450, expenses: 8320 }
  ];

  const insights = [
    {
      type: "warning",
      title: "High Entertainment Spending",
      description: "You've spent 23% more on entertainment this month compared to your average.",
      action: "Review entertainment budget"
    },
    {
      type: "success",
      title: "Great Savings Progress",
      description: "You're on track to save $49,560 this year, exceeding your goal by 12%.",
      action: "Consider investing surplus"
    },
    {
      type: "info",
      title: "Recurring Payment Detected",
      description: "New subscription identified: Netflix Premium ($15.99/month).",
      action: "Review subscriptions"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">Deep insights into your financial patterns</p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar size={16} />
          <span className="text-sm text-gray-600">December 2024</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                      <div className="flex items-center space-x-1">
                        {metric.changeType === "positive" ? (
                          <ArrowUpRight size={16} className="text-green-500" />
                        ) : (
                          <ArrowDownRight size={16} className="text-red-500" />
                        )}
                        <span className={`text-sm font-medium ${
                          metric.changeType === "positive" ? "text-green-600" : "text-red-600"
                        }`}>
                          {metric.change}
                        </span>
                        <span className="text-sm text-gray-500">{metric.description}</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spending by Category */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart size={20} />
              <span>Spending by Category</span>
            </CardTitle>
            <CardDescription>Breakdown of your expenses this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categorySpending.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm text-gray-600">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{item.percentage}% of total expenses</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 size={20} />
              <span>Monthly Trends</span>
            </CardTitle>
            <CardDescription>Income vs Expenses over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyTrends.map((month, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{month.month}</span>
                    <div className="text-sm text-gray-600">
                      <span className="text-green-600">${(month.income / 1000).toFixed(1)}k</span>
                      {" / "}
                      <span className="text-red-600">${(month.expenses / 1000).toFixed(1)}k</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-red-200 rounded-full h-4">
                      <div 
                        className="h-4 bg-green-500 rounded-full relative"
                        style={{ width: `${(month.income / 15000) * 100}%` }}
                      >
                        <div 
                          className="absolute top-0 left-0 h-4 bg-red-500 rounded-full"
                          style={{ width: `${(month.expenses / month.income) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Savings: ${(month.income - month.expenses).toLocaleString()}</span>
                    <span>Rate: {((1 - month.expenses / month.income) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Insights</CardTitle>
          <CardDescription>AI-powered insights to help improve your financial health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                insight.type === "warning" ? "bg-yellow-50 border-yellow-400" :
                insight.type === "success" ? "bg-green-50 border-green-400" :
                "bg-blue-50 border-blue-400"
              }`}>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className={`font-medium ${
                      insight.type === "warning" ? "text-yellow-800" :
                      insight.type === "success" ? "text-green-800" :
                      "text-blue-800"
                    }`}>
                      {insight.title}
                    </h4>
                    <p className={`text-sm ${
                      insight.type === "warning" ? "text-yellow-700" :
                      insight.type === "success" ? "text-green-700" :
                      "text-blue-700"
                    }`}>
                      {insight.description}
                    </p>
                  </div>
                  <Badge variant="outline" className={
                    insight.type === "warning" ? "border-yellow-400 text-yellow-800" :
                    insight.type === "success" ? "border-green-400 text-green-800" :
                    "border-blue-400 text-blue-800"
                  }>
                    {insight.action}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Goals Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Goals</CardTitle>
          <CardDescription>Track your progress towards financial milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Emergency Fund</span>
                <span className="text-sm text-gray-600">$8,400 / $10,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-blue-500 rounded-full" style={{ width: "84%" }}></div>
              </div>
              <p className="text-xs text-gray-500">84% complete • $1,600 remaining</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Vacation Fund</span>
                <span className="text-sm text-gray-600">$3,200 / $5,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-green-500 rounded-full" style={{ width: "64%" }}></div>
              </div>
              <p className="text-xs text-gray-500">64% complete • $1,800 remaining</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">New Car</span>
                <span className="text-sm text-gray-600">$12,500 / $25,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-purple-500 rounded-full" style={{ width: "50%" }}></div>
              </div>
              <p className="text-xs text-gray-500">50% complete • $12,500 remaining</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
