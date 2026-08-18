import React from "react";

export const dynamic = 'force-dynamic';
import {
  Activity,
  Server,
  Database,
  Zap,
  HardDrive,
  Cpu,
  CheckCircle,
  AlertTriangle,
  XCircle,
  TrendingUp,
  TrendingDown,
  Globe,
  Shield,
  RefreshCw,
  Monitor,
  Network,
  Cloud,
} from "lucide-react";

const SystemHealth = () => {
  // Mock system health data
  const systemOverview = [
    {
      title: "System Uptime",
      value: "99.97%",
      change: "+0.02%",
      trend: "up",
      icon: Activity,
      status: "excellent",
      description: "Last 30 days",
    },
    {
      title: "Response Time",
      value: "145ms",
      change: "-15ms",
      trend: "up",
      icon: Zap,
      status: "excellent",
      description: "Average API response",
    },
    {
      title: "Error Rate",
      value: "0.03%",
      change: "-0.01%",
      trend: "up",
      icon: AlertTriangle,
      status: "excellent",
      description: "Error percentage",
    },
    {
      title: "Active Connections",
      value: "12,847",
      change: "+847",
      trend: "up",
      icon: Network,
      status: "good",
      description: "Current connections",
    },
  ];

  const serverMetrics = [
    {
      name: "Web Server 1",
      status: "healthy",
      cpu: 34,
      memory: 67,
      disk: 45,
      uptime: "15 days",
      location: "US-East",
    },
    {
      name: "Web Server 2",
      status: "healthy",
      cpu: 28,
      memory: 52,
      disk: 38,
      uptime: "12 days",
      location: "US-West",
    },
    {
      name: "Database Primary",
      status: "healthy",
      cpu: 42,
      memory: 78,
      disk: 62,
      uptime: "28 days",
      location: "US-East",
    },
    {
      name: "Database Replica",
      status: "warning",
      cpu: 67,
      memory: 89,
      disk: 71,
      uptime: "7 days",
      location: "EU-West",
    },
  ];

  const performanceMetrics = [
    { metric: "Database Queries/sec", value: "2,847", trend: "up", status: "good" },
    { metric: "Cache Hit Rate", value: "94.8%", trend: "up", status: "excellent" },
    { metric: "Bandwidth Usage", value: "124 GB/day", trend: "up", status: "good" },
    { metric: "SSL Certificate", value: "Valid", trend: "stable", status: "excellent" },
  ];

  const recentIncidents = [
    {
      time: "2 hours ago",
      severity: "minor",
      title: "Increased response time in EU region",
      status: "resolved",
      duration: "12 minutes",
    },
    {
      time: "1 day ago",
      severity: "major",
      title: "Database connection timeout issues",
      status: "resolved",
      duration: "45 minutes",
    },
    {
      time: "3 days ago",
      severity: "minor",
      title: "CDN cache refresh delay",
      status: "resolved",
      duration: "8 minutes",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "excellent":
        return { icon: CheckCircle, color: "text-green-600" };
      case "good":
        return { icon: CheckCircle, color: "text-blue-600" };
      case "warning":
        return { icon: AlertTriangle, color: "text-yellow-600" };
      case "critical":
        return { icon: XCircle, color: "text-red-600" };
      default:
        return { icon: CheckCircle, color: "text-gray-600" };
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-100 text-green-800 border-green-200";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "minor":
        return "bg-blue-100 text-blue-800";
      case "major":
        return "bg-orange-100 text-orange-800";
      case "critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System Health</h1>
          <p className="text-gray-600 mt-1">Monitor infrastructure performance and system status</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
            <Monitor className="w-4 h-4" />
            <span>System Report</span>
          </button>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemOverview.map((metric, index) => {
          const Icon = metric.icon;
          const StatusInfo = getStatusIcon(metric.status);
          const StatusIcon = StatusInfo.icon;
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <StatusIcon className={`w-5 h-5 ${StatusInfo.color}`} />
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

      {/* Server Status */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Server Status</h3>
          <p className="text-sm text-gray-600">Real-time server performance and health monitoring</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serverMetrics.map((server, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Server className="w-5 h-5 text-gray-600" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{server.name}</h4>
                      <p className="text-sm text-gray-500">{server.location} • Uptime: {server.uptime}</p>
                    </div>
                  </div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(server.status)}`}>
                    {server.status}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">CPU</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{server.cpu}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${server.cpu > 70 ? 'bg-red-500' : server.cpu > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${server.cpu}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Memory</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{server.memory}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${server.memory > 80 ? 'bg-red-500' : server.memory > 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${server.memory}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <HardDrive className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Disk</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{server.disk}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${server.disk > 80 ? 'bg-red-500' : server.disk > 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${server.disk}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics and Recent Incidents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
            <p className="text-sm text-gray-600">Key system performance indicators</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {performanceMetrics.map((metric, index) => {
                const StatusInfo = getStatusIcon(metric.status);
                const StatusIcon = StatusInfo.icon;
                const TrendIcon = metric.trend === "up" ? TrendingUp : metric.trend === "down" ? TrendingDown : Activity;
                
                return (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{metric.metric}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendIcon className="w-4 h-4 text-gray-400" />
                        <StatusIcon className={`w-4 h-4 ${StatusInfo.color}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Incidents</h3>
            <p className="text-sm text-gray-600">System incidents and resolutions</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className="text-xs text-gray-500">{incident.time}</span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{incident.title}</h4>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Duration: {incident.duration}</span>
                        <span className="flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Resolved</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Overview */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Infrastructure Overview</h3>
          <p className="text-sm text-gray-600">Global infrastructure status and connectivity</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-lg font-bold text-blue-900">AWS</div>
              <div className="text-sm text-blue-700">Primary Cloud</div>
              <div className="flex items-center justify-center space-x-1 text-xs text-green-600 mt-2">
                <CheckCircle className="w-3 h-3" />
                <span>Operational</span>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
              <Database className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-lg font-bold text-green-900">PostgreSQL</div>
              <div className="text-sm text-green-700">Database</div>
              <div className="flex items-center justify-center space-x-1 text-xs text-green-600 mt-2">
                <CheckCircle className="w-3 h-3" />
                <span>Healthy</span>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200">
              <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-lg font-bold text-purple-900">CDN</div>
              <div className="text-sm text-purple-700">Content Delivery</div>
              <div className="flex items-center justify-center space-x-1 text-xs text-green-600 mt-2">
                <CheckCircle className="w-3 h-3" />
                <span>Active</span>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
              <Shield className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-lg font-bold text-orange-900">Security</div>
              <div className="text-sm text-orange-700">Protection Layer</div>
              <div className="flex items-center justify-center space-x-1 text-xs text-green-600 mt-2">
                <CheckCircle className="w-3 h-3" />
                <span>Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;
