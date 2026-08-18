"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Download,
  Trash2,
  Eye,
  EyeOff,
  Key,
  Smartphone,
  Mail
} from "lucide-react";

const SettingsPage = () => {
  const [showApiKey, setShowApiKey] = React.useState(false);

  const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/api/placeholder/80/80",
    joinedDate: "March 2023",
    plan: "Pro"
  };

  const notificationSettings = [
    { id: "budget_alerts", label: "Budget Alerts", description: "Get notified when you're close to budget limits", enabled: true },
    { id: "transaction_updates", label: "Transaction Updates", description: "Notifications for new transactions", enabled: true },
    { id: "weekly_reports", label: "Weekly Reports", description: "Receive weekly financial summaries", enabled: false },
    { id: "security_alerts", label: "Security Alerts", description: "Important security and login notifications", enabled: true },
    { id: "promotional", label: "Promotional Emails", description: "Updates about new features and offers", enabled: false }
  ];

  const securitySettings = [
    { id: "two_factor", label: "Two-Factor Authentication", description: "Add an extra layer of security", enabled: true },
    { id: "login_alerts", label: "Login Alerts", description: "Get notified of new sign-ins", enabled: true },
    { id: "session_timeout", label: "Auto Session Timeout", description: "Automatically log out after inactivity", enabled: false }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account preferences and security settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User size={20} />
                <span>Profile Information</span>
              </CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} className="text-gray-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900">{profileData.name}</h3>
                  <p className="text-sm text-gray-500">Member since {profileData.joinedDate}</p>
                  <Badge variant="secondary">{profileData.plan} Plan</Badge>
                </div>
                <Button variant="outline" size="sm">Change Photo</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input defaultValue={profileData.name} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input defaultValue={profileData.email} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Time Zone</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell size={20} />
                <span>Notification Preferences</span>
              </CardTitle>
              <CardDescription>Choose how you want to be notified about account activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium text-gray-900">{setting.label}</h4>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <Switch defaultChecked={setting.enabled} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield size={20} />
                <span>Security & Privacy</span>
              </CardTitle>
              <CardDescription>Manage your account security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {securitySettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium text-gray-900">{setting.label}</h4>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <Switch defaultChecked={setting.enabled} />
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-4">Password & Authentication</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Key size={16} className="mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Smartphone size={16} className="mr-2" />
                    Manage 2FA Devices
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye size={16} className="mr-2" />
                    View Active Sessions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* API Access */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key size={20} />
                <span>API Access</span>
              </CardTitle>
              <CardDescription>Manage your API keys for integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">API Key</label>
                <div className="flex space-x-2">
                  <Input 
                    type={showApiKey ? "text" : "password"}
                    value="wlth_sk_1234567890abcdef"
                    readOnly
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Regenerate
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Export */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download size={20} />
                <span>Data Export</span>
              </CardTitle>
              <CardDescription>Download your financial data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Download size={16} className="mr-2" />
                Export Transactions (CSV)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download size={16} className="mr-2" />
                Export All Data (JSON)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download size={16} className="mr-2" />
                Generate Report (PDF)
              </Button>
            </CardContent>
          </Card>

          {/* Billing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard size={20} />
                <span>Billing</span>
              </CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="font-medium text-green-800">Pro Plan Active</p>
                <p className="text-sm text-green-600">Next billing: Jan 1, 2025</p>
              </div>
              <Button variant="outline" className="w-full">
                Manage Subscription
              </Button>
              <Button variant="outline" className="w-full">
                Billing History
              </Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-600">
                <Trash2 size={20} />
                <span>Danger Zone</span>
              </CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50">
                Delete All Data
              </Button>
              <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50">
                Close Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
