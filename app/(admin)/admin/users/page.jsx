"use client";

import React, { useState } from "react";

export const dynamic = 'force-dynamic';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  TrendingUp,
  Shield,
  Eye,
  Edit,
  Ban,
  CheckCircle,
  Clock,
} from "lucide-react";

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock user data
  const userStats = [
    {
      title: "Total Users",
      value: "47,382",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "New This Month",
      value: "3,247",
      change: "+23.1%",
      trend: "up",
      icon: UserPlus,
    },
    {
      title: "Active Today",
      value: "23,847",
      change: "+8.7%",
      trend: "up",
      icon: CheckCircle,
    },
    {
      title: "Premium Users",
      value: "12,847",
      change: "+15.2%",
      trend: "up",
      icon: Shield,
    },
  ];

  const mockUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      plan: "Pro",
      status: "Active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      transactions: 247,
      revenue: "$294.00",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      plan: "Business",
      status: "Active",
      joinDate: "2024-02-03",
      lastActive: "1 day ago",
      transactions: 189,
      revenue: "$588.00",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Emma Williams",
      email: "emma.williams@example.com",
      plan: "Free",
      status: "Inactive",
      joinDate: "2024-03-12",
      lastActive: "1 week ago",
      transactions: 45,
      revenue: "$0.00",
      avatar: "EW",
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david.rodriguez@example.com",
      plan: "Enterprise",
      status: "Active",
      joinDate: "2023-11-28",
      lastActive: "30 minutes ago",
      transactions: 892,
      revenue: "$2,940.00",
      avatar: "DR",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      plan: "Pro",
      status: "Pending",
      joinDate: "2024-12-20",
      lastActive: "5 hours ago",
      transactions: 12,
      revenue: "$29.40",
      avatar: "LA",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPlanColor = (plan) => {
    switch (plan) {
      case "Free":
        return "bg-gray-100 text-gray-800";
      case "Pro":
        return "bg-blue-100 text-blue-800";
      case "Business":
        return "bg-purple-100 text-purple-800";
      case "Enterprise":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || user.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage all platform users</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
          <UserPlus className="w-5 h-5" />
          <span>Add User</span>
        </button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = TrendingUp;
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <TrendIcon className="w-3 h-3" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Users ({filteredUsers.length})</h3>
          <p className="text-sm text-gray-600">Manage user accounts and their details</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPlanColor(user.plan)}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.transactions} transactions</div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>Last: {user.lastActive}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.revenue}</div>
                    <div className="text-xs text-gray-500">Total lifetime</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200">
                        <Ban className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Activity Timeline */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent User Activity</h3>
          <p className="text-sm text-gray-600">Latest user registrations and activities</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { user: "Sarah Johnson", action: "Upgraded to Pro plan", time: "2 minutes ago", type: "upgrade" },
              { user: "Michael Chen", action: "Completed first transaction", time: "15 minutes ago", type: "transaction" },
              { user: "Emma Williams", action: "Registered new account", time: "1 hour ago", type: "signup" },
              { user: "David Rodriguez", action: "Used AI Receipt Scanner", time: "2 hours ago", type: "ai_usage" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === "upgrade" ? "bg-purple-400" :
                  activity.type === "transaction" ? "bg-green-400" :
                  activity.type === "signup" ? "bg-blue-400" : "bg-orange-400"
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <span className="font-semibold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
