import React from "react";

export const dynamic = 'force-dynamic';
import {
  Users,
  DollarSign,
  CreditCard,
  Bot,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Globe,
  Calendar,
  Clock,
  Target,
} from "lucide-react";

const AdminDashboard = () => {
  // Mock data for impressive metrics
  const keyMetrics = [
    {
      title: "Total Users",
      value: "47,382",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "blue",
      subtext: "Last 30 days",
    },
    {
      title: "Monthly Revenue",
      value: "$284,720",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "green",
      subtext: "MRR Growth",
    },
    {
      title: "Active Subscriptions",
      value: "12,847",
      change: "+8.7%",
      trend: "up",
      icon: CreditCard,
      color: "purple",
      subtext: "Paying customers",
    },
    {
      title: "AI Processing",
      value: "1.2M",
      change: "+45.2%",
      trend: "up",
      icon: Bot,
      color: "orange",
      subtext: "Monthly requests",
    },
  ];

  const recentActivity = [
    {
      type: "user_signup",
      message: "New user registration surge detected",
      time: "2 minutes ago",
      status: "success",
    },
    {
      type: "revenue",
      message: "Monthly revenue target achieved",
      time: "15 minutes ago",
      status: "success",
    },
    {
      type: "ai_processing",
      message: "AI processing capacity at 78%",
      time: "1 hour ago",
      status: "warning",
    },
    {
      type: "system",
      message: "Database backup completed successfully",
      time: "2 hours ago",
      status: "info",
    },
  ];

  const platformStats = [
    { label: "Uptime", value: "99.99%", icon: Activity },
    { label: "Response Time", value: "145ms", icon: Zap },
    { label: "Global Reach", value: "47 countries", icon: Globe },
    { label: "Daily Active", value: "23,847", icon: Target },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-200 bg-blue-50",
      green: "from-green-500 to-green-600 border-green-200 bg-green-50",
      purple: "from-purple-500 to-purple-600 border-purple-200 bg-purple-50",
      orange: "from-orange-500 to-orange-600 border-orange-200 bg-orange-50",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening with Sable today.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{new Date().toLocaleDateString("en-US", { 
              weekday: "long", 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}</span>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          
          return (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 ${getColorClasses(metric.color).split(" ")[2]} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(metric.color).split(" ")[0]} ${getColorClasses(metric.color).split(" ")[1]}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    metric.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    <TrendIcon className="w-3 h-3" />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                  <p className="text-sm text-gray-600 font-medium">{metric.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.subtext}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Growth Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">User Growth Trend</h3>
            <p className="text-sm text-gray-600">Monthly user acquisition over the last 6 months</p>
          </div>
          <div className="p-6">
            {/* Mock Chart Area */}
            <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <p className="text-gray-600 font-medium">User Growth Chart</p>
                <p className="text-sm text-gray-500">47% increase this quarter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-sm text-gray-600">Latest platform events</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "success" ? "bg-green-400" :
                    activity.status === "warning" ? "bg-yellow-400" :
                    activity.status === "error" ? "bg-red-400" : "bg-blue-400"
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.message}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Statistics */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Platform Performance</h3>
          <p className="text-sm text-gray-600">Real-time system metrics and performance indicators</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {platformStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Revenue and Subscription Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Breakdown</h3>
            <p className="text-sm text-gray-600">Monthly recurring revenue by plan</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Pro Plan</span>
                <span className="text-sm font-bold text-gray-900">$186,420 (65%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Business Plan</span>
                <span className="text-sm font-bold text-gray-900">$71,100 (25%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: "25%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Enterprise Plan</span>
                <span className="text-sm font-bold text-gray-900">$27,200 (10%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">AI Feature Usage</h3>
            <p className="text-sm text-gray-600">Most popular AI features this month</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Receipt Scanner</span>
                <span className="text-sm font-bold text-gray-900">847K uses</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">AI Insights</span>
                <span className="text-sm font-bold text-gray-900">623K uses</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">AI Assistant</span>
                <span className="text-sm font-bold text-gray-900">412K uses</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Budget Alerts</span>
                <span className="text-sm font-bold text-gray-900">298K uses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
