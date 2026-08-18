import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, 
  TrendingUp, 
 
  AlertTriangle,
  CheckCircle,
  PieChart,
  Target,
  Calendar,
  DollarSign
} from "lucide-react";

const BudgetPage = () => {
  // Mock budget data
  const totalBudget = 8500;
  const totalSpent = 6420;
  const remainingBudget = totalBudget - totalSpent;

  const budgetCategories = [
    {
      category: "Food & Dining",
      budgeted: 1500,
      spent: 1320,
      color: "bg-blue-500",
      status: "good"
    },
    {
      category: "Transportation",
      budgeted: 800,
      spent: 920,
      color: "bg-red-500",
      status: "over"
    },
    {
      category: "Shopping",
      budgeted: 1200,
      spent: 1180,
      color: "bg-yellow-500",
      status: "warning"
    },
    {
      category: "Bills & Utilities",
      budgeted: 1500,
      spent: 1450,
      color: "bg-green-500",
      status: "good"
    },
    {
      category: "Entertainment",
      budgeted: 600,
      spent: 480,
      color: "bg-purple-500",
      status: "good"
    },
    {
      category: "Healthcare",
      budgeted: 400,
      spent: 220,
      color: "bg-indigo-500",
      status: "good"
    },
    {
      category: "Savings",
      budgeted: 2000,
      spent: 1850,
      color: "bg-emerald-500",
      status: "good"
    },
    {
      category: "Miscellaneous",
      budgeted: 500,
      spent: 0,
      color: "bg-gray-500",
      status: "good"
    }
  ];

  const monthlyComparison = [
    { month: "Sep", budgeted: 8200, spent: 7800 },
    { month: "Oct", budgeted: 8300, spent: 8100 },
    { month: "Nov", budgeted: 8400, spent: 7950 },
    { month: "Dec", budgeted: 8500, spent: 6420 }
  ];

  const budgetInsights = [
    {
      type: "success",
      title: "Great Progress on Savings",
      description: "You're on track to save $150 more than planned this month!"
    },
    {
      type: "warning", 
      title: "Transportation Over Budget",
      description: "You've exceeded your transportation budget by $120. Consider carpooling or public transit."
    },
    {
      type: "info",
      title: "Healthcare Budget Underused",
      description: "You have $180 remaining in healthcare. Consider scheduling check-ups."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Budget Management</h1>
          <p className="text-gray-600 mt-2">Track and manage your monthly spending limits</p>
        </div>
        <Button className="flex items-center space-x-2">
          <PlusCircle size={16} />
          <span>Create Budget</span>
        </Button>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Target className="text-blue-500" size={20} />
              <span className="text-sm font-medium text-gray-600">Total Budget</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">${totalBudget.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <DollarSign className="text-red-500" size={20} />
              <span className="text-sm font-medium text-gray-600">Total Spent</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">${totalSpent.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-green-500" size={20} />
              <span className="text-sm font-medium text-gray-600">Remaining</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">${remainingBudget.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <PieChart className="text-purple-500" size={20} />
              <span className="text-sm font-medium text-gray-600">Budget Used</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{((totalSpent / totalBudget) * 100).toFixed(1)}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Budget Progress</CardTitle>
          <CardDescription>Your spending across all categories for December 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Monthly Progress</span>
              <span className="text-sm text-gray-600">${totalSpent.toLocaleString()} / ${totalBudget.toLocaleString()}</span>
            </div>
            <Progress value={(totalSpent / totalBudget) * 100} className="h-3" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>{((totalSpent / totalBudget) * 100).toFixed(1)}% used</span>
              <span>{30 - new Date().getDate()} days remaining</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Budgets */}
      <Card>
        <CardHeader>
          <CardTitle>Budget by Category</CardTitle>
          <CardDescription>Detailed breakdown of your budget categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {budgetCategories.map((category, index) => {
              const percentage = (category.spent / category.budgeted) * 100;
              const remaining = category.budgeted - category.spent;
              
              return (
                <div key={index} className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="font-medium text-gray-900">{category.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {category.status === "over" && <AlertTriangle size={16} className="text-red-500" />}
                      {category.status === "warning" && <AlertTriangle size={16} className="text-yellow-500" />}
                      {category.status === "good" && <CheckCircle size={16} className="text-green-500" />}
                      <Badge variant={
                        category.status === "over" ? "destructive" :
                        category.status === "warning" ? "secondary" : "default"
                      }>
                        {category.status === "over" ? "Over Budget" :
                         category.status === "warning" ? "Near Limit" : "On Track"}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Spent: ${category.spent.toLocaleString()}</span>
                      <span className="text-gray-600">Budget: ${category.budgeted.toLocaleString()}</span>
                    </div>
                    <Progress 
                      value={Math.min(percentage, 100)} 
                      className={`h-2 ${category.status === "over" ? "progress-red" : ""}`}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{percentage.toFixed(1)}% used</span>
                      <span className={remaining < 0 ? "text-red-600" : "text-green-600"}>
                        {remaining >= 0 ? `$${remaining.toLocaleString()} left` : `$${Math.abs(remaining).toLocaleString()} over`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>Monthly Comparison</span>
            </CardTitle>
            <CardDescription>Budget vs actual spending over recent months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyComparison.map((month, index) => {
                const percentage = (month.spent / month.budgeted) * 100;
                const isCurrentMonth = index === monthlyComparison.length - 1;
                
                return (
                  <div key={index} className={`space-y-2 ${isCurrentMonth ? "bg-blue-50 p-3 rounded-lg" : ""}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{month.month}</span>
                      <div className="text-sm">
                        <span className="text-gray-600">${month.spent.toLocaleString()}</span>
                        <span className="text-gray-400"> / </span>
                        <span className="text-gray-600">${month.budgeted.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            percentage > 95 ? "bg-red-500" : 
                            percentage > 85 ? "bg-yellow-500" : "bg-green-500"
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{percentage.toFixed(1)}% of budget</span>
                      <span>{month.budgeted - month.spent >= 0 ? "Under" : "Over"} by ${Math.abs(month.budgeted - month.spent).toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Budget Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Insights</CardTitle>
            <CardDescription>AI-powered suggestions to optimize your budget</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgetInsights.map((insight, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  insight.type === "success" ? "bg-green-50 border-green-400" :
                  insight.type === "warning" ? "bg-yellow-50 border-yellow-400" :
                  "bg-blue-50 border-blue-400"
                }`}>
                  <h4 className={`font-medium mb-1 ${
                    insight.type === "success" ? "text-green-800" :
                    insight.type === "warning" ? "text-yellow-800" :
                    "text-blue-800"
                  }`}>
                    {insight.title}
                  </h4>
                  <p className={`text-sm ${
                    insight.type === "success" ? "text-green-700" :
                    insight.type === "warning" ? "text-yellow-700" :
                    "text-blue-700"
                  }`}>
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BudgetPage;
