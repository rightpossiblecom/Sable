import React from "react";

export const dynamic = 'force-dynamic';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  Target,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Repeat,
  AlertCircle,
} from "lucide-react";

const RevenueAnalytics = () => {
  // Mock revenue data
  const revenueMetrics = [
    {
      title: "Monthly Recurring Revenue",
      value: "$284,720",
      change: "+23.1%",
      trend: "up",
      icon: Repeat,
      description: "MRR this month",
    },
    {
      title: "Annual Recurring Revenue",
      value: "$3.4M",
      change: "+18.7%",
      trend: "up",
      icon: Calendar,
      description: "Projected ARR",
    },
    {
      title: "Average Revenue Per User",
      value: "$22.15",
      change: "+5.3%",
      trend: "up",
      icon: Users,
      description: "ARPU this month",
    },
    {
      title: "Churn Rate",
      value: "2.8%",
      change: "-0.5%",
      trend: "down",
      icon: AlertCircle,
      description: "Monthly churn",
    },
  ];

  const subscriptionBreakdown = [
    {
      plan: "Free",
      users: 34535,
      percentage: 73,
      revenue: "$0",
      color: "gray",
    },
    {
      plan: "Pro",
      users: 8647,
      percentage: 18,
      revenue: "$186,420",
      color: "blue",
    },
    {
      plan: "Business",
      users: 2847,
      percentage: 6,
      revenue: "$71,100",
      color: "green",
    },
    {
      plan: "Enterprise",
      users: 1353,
      percentage: 3,
      revenue: "$27,200",
      color: "purple",
    },
  ];

  const monthlyRevenue = [
    { month: "Jul", revenue: 198500, growth: 15.2 },
    { month: "Aug", revenue: 215200, growth: 8.4 },
    { month: "Sep", revenue: 234100, growth: 8.8 },
    { month: "Oct", revenue: 251800, growth: 7.6 },
    { month: "Nov", revenue: 268900, growth: 6.8 },
    { month: "Dec", revenue: 284720, growth: 5.9 },
  ];

  const topMetrics = [
    { label: "Conversion Rate", value: "3.8%", change: "+0.3%", trend: "up" },
    { label: "Customer Lifetime Value", value: "$847", change: "+12%", trend: "up" },
    { label: "Payback Period", value: "8.2 months", change: "-0.8mo", trend: "down" },
    { label: "Net Revenue Retention", value: "118%", change: "+5%", trend: "up" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      gray: "from-gray-500 to-gray-600",
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Analytics</h1>
          <p className="text-gray-600 mt-1">Track financial performance and growth metrics</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
            <PieChart className="w-4 h-4" />
            <span>View Detailed Report</span>
          </button>
        </div>
      </div>

      {/* Key Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          const trendColor = metric.trend === "up" ? "text-green-600" : "text-red-600";
          const trendBg = metric.trend === "up" ? "bg-green-50" : "bg-red-50";
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${trendBg} ${trendColor}`}>
                    <TrendIcon className="w-3 h-3" />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                  <p className="text-sm text-gray-600 font-medium">{metric.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Trend and Subscription Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
            <p className="text-sm text-gray-600">6-month revenue growth trajectory</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {monthlyRevenue.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${(data.revenue / 284720) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">${(data.revenue / 1000).toFixed(0)}K</div>
                    <div className="flex items-center space-x-1 text-xs text-green-600">
                      <ArrowUpRight className="w-3 h-3" />
                      <span>+{data.growth}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscription Breakdown */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Subscription Plans</h3>
            <p className="text-sm text-gray-600">Revenue distribution by plan type</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {subscriptionBreakdown.map((plan, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getColorClasses(plan.color)}`}></div>
                      <span className="text-sm font-medium text-gray-700">{plan.plan}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">{plan.revenue}</div>
                      <div className="text-xs text-gray-500">{plan.users.toLocaleString()} users</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${getColorClasses(plan.color)} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${plan.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Metrics */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Advanced Revenue Metrics</h3>
          <p className="text-sm text-gray-600">Key performance indicators for sustainable growth</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topMetrics.map((metric, index) => {
              const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;
              const trendColor = metric.trend === "up" ? "text-green-600" : "text-red-600";
              
              return (
                <div key={index} className="text-center p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                  <div className={`flex items-center justify-center space-x-1 text-xs font-medium ${trendColor}`}>
                    <TrendIcon className="w-3 h-3" />
                    <span>{metric.change}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Payment Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Payment Success Rate</h3>
            <p className="text-sm text-gray-600">Transaction success and failure analysis</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Successful Payments</span>
                <span className="text-sm font-bold text-green-600">97.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: "97.8%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Failed Payments</span>
                <span className="text-sm font-bold text-red-600">2.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full" style={{ width: "2.2%" }}></div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Payment processing is performing excellently</span>
                </div>
                <p className="text-xs text-green-600 mt-1">Industry average is 95%. You&apos;re outperforming!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Forecast</h3>
            <p className="text-sm text-gray-600">Projected revenue for next quarter</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">$312,400</div>
                <div className="text-sm text-gray-600">Projected January MRR</div>
                <div className="flex items-center justify-center space-x-1 text-sm font-medium text-green-600 mt-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+9.7% growth expected</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-900">Q1</div>
                  <div className="text-sm text-blue-700">$890K</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-900">Q2</div>
                  <div className="text-sm text-green-700">$980K</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-900">Q3</div>
                  <div className="text-sm text-purple-700">$1.1M</div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Strong growth trajectory maintained</span>
                </div>
                <p className="text-xs text-blue-600 mt-1">Based on current trends and user acquisition rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;
