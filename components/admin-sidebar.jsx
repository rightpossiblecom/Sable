"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Bot,
  Activity,
  Settings,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

const AdminSidebar = () => {
  const pathname = usePathname();

  const adminNavItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      description: "Overview & metrics",
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
      description: "User management",
    },
    {
      title: "Revenue",
      href: "/admin/revenue",
      icon: DollarSign,
      description: "Financial analytics",
    },
    {
      title: "AI Analytics",
      href: "/admin/ai-analytics",
      icon: Bot,
      description: "AI usage & performance",
    },
    {
      title: "System Health",
      href: "/admin/system",
      icon: Activity,
      description: "Performance monitoring",
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      description: "Platform configuration",
    },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      {/* Admin Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Admin Panel
            </h2>
            <p className="text-xs text-gray-500">Sable</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 text-purple-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon
                className={`w-5 h-5 mr-3 ${
                  isActive ? "text-purple-600" : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
              <div className="flex-1">
                <div className={`font-medium ${isActive ? "text-purple-700" : ""}`}>
                  {item.title}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {item.description}
                </div>
              </div>
              {isActive && (
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">Platform Status</p>
              <p className="text-xs text-green-600">All systems operational</p>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <Zap className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
