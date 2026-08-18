import React from "react";

export const dynamic = 'force-dynamic';
import {
  Bot,
  Camera,
  Brain,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  AlertTriangle,
  DollarSign,
  Activity,
  Target,
  Sparkles,
  MessageSquare,
  BarChart3,
} from "lucide-react";

const AIAnalytics = () => {
  // Mock AI analytics data
  const aiMetrics = [
    {
      title: "AI Requests Today",
      value: "23,847",
      change: "+12.5%",
      trend: "up",
      icon: Bot,
      description: "Total AI API calls",
    },
    {
      title: "Receipt Scans",
      value: "8,429",
      change: "+28.1%",
      trend: "up",
      icon: Camera,
      description: "Successful scans today",
    },
    {
      title: "AI Insights Generated",
      value: "5,632",
      change: "+15.7%",
      trend: "up",
      icon: Brain,
      description: "Financial insights created",
    },
    {
      title: "Success Rate",
      value: "97.8%",
      change: "+1.2%",
      trend: "up",
      icon: CheckCircle,
      description: "Overall AI accuracy",
    },
  ];

  const aiFeatureUsage = [
    {
      feature: "Receipt Scanner",
      usage: 847234,
      percentage: 45,
      accuracy: 98.2,
      cost: "$2,341",
      color: "blue",
    },
    {
      feature: "AI Insights",
      usage: 623187,
      percentage: 33,
      accuracy: 96.7,
      cost: "$1,867",
      color: "green",
    },
    {
      feature: "AI Assistant",
      usage: 412956,
      percentage: 22,
      accuracy: 94.1,
      cost: "$1,238",
      color: "purple",
    },
  ];

  const monthlyAIUsage = [
    { month: "Jul", requests: 1234567, cost: 4200 },
    { month: "Aug", requests: 1456789, cost: 4850 },
    { month: "Sep", requests: 1678901, cost: 5320 },
    { month: "Oct", requests: 1892345, cost: 5890 },
    { month: "Nov", requests: 2134567, cost: 6470 },
    { month: "Dec", requests: 2389012, cost: 7120 },
  ];

  const aiPerformanceMetrics = [
    { metric: "Average Response Time", value: "1.2s", status: "excellent", target: "< 2s" },
    { metric: "Error Rate", value: "0.8%", status: "good", target: "< 1%" },
    { metric: "Uptime", value: "99.97%", status: "excellent", target: "> 99.9%" },
    { metric: "Throughput", value: "450 req/min", status: "good", target: "> 400 req/min" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    };
    return colors[color] || colors.blue;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-50";
      case "good":
        return "text-blue-600 bg-blue-50";
      case "warning":
        return "text-yellow-600 bg-yellow-50";
      case "poor":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Analytics</h1>
          <p className="text-gray-600 mt-1">Monitor AI feature usage, performance, and costs</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>AI Report</span>
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Optimize AI</span>
          </button>
        </div>
      </div>

      {/* AI Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          const trendColor = metric.trend === "up" ? "text-green-600" : "text-red-600";
          const trendBg = metric.trend === "up" ? "bg-green-50" : "bg-red-50";
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
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

      {/* AI Feature Usage and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature Usage Breakdown */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">AI Feature Usage</h3>
            <p className="text-sm text-gray-600">Usage distribution and accuracy by feature</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {aiFeatureUsage.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getColorClasses(feature.color)}`}></div>
                      <span className="text-sm font-medium text-gray-700">{feature.feature}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">{feature.usage.toLocaleString()} uses</div>
                      <div className="text-xs text-gray-500">{feature.accuracy}% accuracy</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${getColorClasses(feature.color)} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${feature.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{feature.percentage}% of total usage</span>
                    <span>Cost: {feature.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Performance Metrics */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
            <p className="text-sm text-gray-600">Real-time AI system performance indicators</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {aiPerformanceMetrics.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{item.metric}</div>
                    <div className="text-xs text-gray-500 mt-1">Target: {item.target}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{item.value}</div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status === "excellent" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {item.status === "good" && <Target className="w-3 h-3 mr-1" />}
                      {item.status === "warning" && <AlertTriangle className="w-3 h-3 mr-1" />}
                      {item.status === "poor" && <XCircle className="w-3 h-3 mr-1" />}
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Usage Trend */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">AI Usage & Cost Trend</h3>
          <p className="text-sm text-gray-600">6-month AI processing volume and associated costs</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {monthlyAIUsage.map((data, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-200">
                <div className="text-sm font-medium text-gray-600 mb-2">{data.month}</div>
                <div className="space-y-2">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{(data.requests / 1000000).toFixed(1)}M</div>
                    <div className="text-xs text-gray-500">requests</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-purple-600">${data.cost}</div>
                    <div className="text-xs text-gray-500">cost</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Feature Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Receipt Scanner Details */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Receipt Scanner</h3>
                <p className="text-sm text-gray-600">OCR & data extraction</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Scans</span>
                <span className="text-sm font-bold text-gray-900">8,429</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="text-sm font-bold text-green-600">98.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg Processing</span>
                <span className="text-sm font-bold text-gray-900">1.8s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monthly Cost</span>
                <span className="text-sm font-bold text-purple-600">$2,341</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights Details */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
                <p className="text-sm text-gray-600">Financial analysis</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Insights</span>
                <span className="text-sm font-bold text-gray-900">5,632</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Accuracy Rate</span>
                <span className="text-sm font-bold text-green-600">96.7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg Generation</span>
                <span className="text-sm font-bold text-gray-900">2.3s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monthly Cost</span>
                <span className="text-sm font-bold text-purple-600">$1,867</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Details */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-sm text-gray-600">Chat & support</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Queries</span>
                <span className="text-sm font-bold text-gray-900">3,847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Satisfaction</span>
                <span className="text-sm font-bold text-green-600">94.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg Response</span>
                <span className="text-sm font-bold text-gray-900">0.9s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monthly Cost</span>
                <span className="text-sm font-bold text-purple-600">$1,238</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Cost Analysis */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">AI Cost Analysis</h3>
          <p className="text-sm text-gray-600">Cost efficiency and optimization opportunities</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-900">$7,120</div>
              <div className="text-sm text-blue-700 font-medium">Monthly AI Cost</div>
              <div className="text-xs text-blue-600 mt-1">+12% from last month</div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
              <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-900">$0.003</div>
              <div className="text-sm text-green-700 font-medium">Cost per Request</div>
              <div className="text-xs text-green-600 mt-1">-5% optimization this month</div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-900">89%</div>
              <div className="text-sm text-purple-700 font-medium">Cost Efficiency</div>
              <div className="text-xs text-purple-600 mt-1">Excellent performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
