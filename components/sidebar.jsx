"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CreditCard, 
  Building2, 
  PieChart, 
  TrendingUp, 
  Crown, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  Brain,
  Scan,
  Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import { clearDemoSession } from "@/lib/demo-auth";
import { useRouter } from "next/navigation";


const sidebarItems = [
  {
    title: "Executive Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Transaction Intelligence",
    href: "/transaction",
    icon: CreditCard
  },
  {
    title: "Portfolio Management",
    href: "/account",
    icon: Building2
  },
  {
    title: "Strategic Planning",
    href: "/budget",
    icon: PieChart
  },
  {
    title: "Predictive Analytics",
    href: "/analytics",
    icon: TrendingUp
  },
  {
    title: "AI Financial Advisor",
    href: "/ai-assistant", 
    icon: Brain,
    badge: "COGNITIVE"
  },
  {
    title: "Document Intelligence",
    href: "/receipt-scanner",
    icon: Scan,
    badge: "ML"
  },
  {
    title: "Market Intelligence",
    href: "/ai-insights",
    icon: Sparkles,
    badge: "INSIGHTS"
  },
  {
    title: "Enterprise License",
    href: "/subscription",
    icon: Crown
  },
  {
    title: "System Configuration",
    href: "/settings",
    icon: Settings
  }
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    clearDemoSession();
    router.push("/");
    router.refresh();
  };

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? "w-16" : "w-64"
    } flex flex-col h-screen sticky top-0`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <Link href="/dashboard" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Sable
          </Link>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 h-8 w-8"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link key={item.href} href={item.href}>
              <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? "bg-blue-50 text-blue-600 border border-blue-200" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}>
                <div className="flex items-center space-x-3">
                  <Icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium text-sm">{item.title}</span>
                  )}
                </div>
                {!isCollapsed && item.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className={`w-full ${isCollapsed ? "px-2" : "justify-start"}`}
          onClick={handleSignOut}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-3">Sign Out</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
