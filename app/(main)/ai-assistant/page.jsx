"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Brain,
  MessageSquare,
  TrendingUp,
  PieChart,
  Target,
  Lightbulb,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Camera,
  Send
} from "lucide-react";
import Link from "next/link";


const AIAssistantPage = () => {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "I have the four books in front of me — Victoria Island operating, Family Reserve, the Accra desk, and the Land Trust. Ask about a corridor, a school fee, or a title.",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: "user", 
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      setMessages(prev => [...prev, {
        type: "ai",
        content: aiResponse,
        timestamp: new Date()
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("land") || input.includes("lekki") || input.includes("plot")) {
      return "The Land Trust still holds the Lekki Phase I survey fee from this month. Leave that book untouched if the title is meant for the children. The Victoria Island operating account can carry the next legal invoice.";
    } else if (input.includes("save") || input.includes("reserve")) {
      return "Family Reserve took the Kilimani rent and the Standard Bank coupon. That is the book that should fund the next plot, not the next dinner. Keep the standing order from GTBank on the first of the month.";
    } else if (input.includes("budget") || input.includes("spend") || input.includes("expense")) {
      return "This month the house has spent most on education, land, and the Accra crew. Food and transport are inside the line. I would not raise the operating budget — I would move the Johannesburg retainer to the Chamber book.";
    } else if (input.includes("income") || input.includes("accra") || input.includes("rent")) {
      return "The Accra cocoa desk and the Kilimani rent are the two lines that should refill reserve. Operating already took the Lagos logistics dividend. Do not spend the coupon on the operating book.";
    } else {
      return "I have the four books in front of me — Victoria Island operating, Family Reserve, the Accra desk, and the Land Trust. Ask about a corridor, a school fee, or a title, and I will read the year from those ledgers.";
    }
  };
  const aiCapabilities = [
    {
      icon: MessageSquare,
      title: "Smart Financial Chat",
      description: "Ask questions about your finances and get personalized insights",
      example: "\"How much did I spend on groceries last month?\"",
      status: "active",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Spending Pattern Analysis",
      description: "AI analyzes your spending habits and identifies trends",
      example: "\"Your entertainment spending increased 23% this month\"",
      status: "active",
      color: "bg-green-500"
    },
    {
      icon: Target,
      title: "Goal Recommendations",
      description: "Personalized savings goals based on your income and expenses",
      example: "\"You could save $300/month by optimizing these categories\"",
      status: "active",
      color: "bg-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Smart Categorization",
      description: "Automatically categorizes transactions with 95% accuracy",
      example: "\"Starbucks\" → Food & Dining",
      status: "active",
      color: "bg-yellow-500"
    },
    {
      icon: Zap,
      title: "Predictive Budgeting",
      description: "Predicts future expenses based on historical patterns",
      example: "\"You'll likely spend $450 on utilities next month\"",
      status: "coming-soon",
      color: "bg-orange-500"
    },
    {
      icon: PieChart,
      title: "Investment Advisor",
      description: "AI-powered investment recommendations based on your profile",
      example: "\"Consider investing your $2000 surplus in low-risk ETFs\"",
      status: "coming-soon",
      color: "bg-indigo-500"
    }
  ];

  const recentInsights = [
    {
      type: "warning",
      title: "Unusual Spending Detected",
      message: "Your dining expenses are 40% higher than usual this week. Consider home cooking to save money.",
      time: "2 hours ago",
      action: "View Details"
    },
    {
      type: "success",
      title: "Savings Goal Progress",
      message: "Great news! You're ahead of schedule on your emergency fund goal. You'll reach $10,000 by March.",
      time: "1 day ago",
      action: "Adjust Goal"
    },
    {
      type: "info",
      title: "Bill Optimization",
      message: "I found a better phone plan that could save you $25/month. Switch to save $300 annually.",
      time: "3 days ago",
      action: "Learn More"
    }
  ];

  const quickActions = [
    {
      title: "Ask AI About Finances",
      description: "Chat with AI about your spending patterns",
      icon: MessageSquare,
      action: "Start Chat",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Scan Receipt",
      description: "Extract transaction data from receipts",
      icon: Camera,
      action: "Scan Now",
      gradient: "from-green-500 to-teal-600",
      link: "/receipt-scanner"
    },
    {
      title: "Get Monthly Report",
      description: "AI-generated financial insights report",
      icon: TrendingUp,
      action: "Generate Report",
      gradient: "from-purple-500 to-pink-600",
      link: "/ai-insights"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <Brain size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Financial Assistant</h1>
            <p className="text-gray-600 mt-2">Powered by advanced AI to help you make smarter financial decisions</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" />
            AI Models Active
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            <Sparkles size={12} className="mr-1" />
            Gemini 1.5 Flash
          </Badge>
          <Badge className="bg-purple-100 text-purple-800">
            <Clock size={12} className="mr-1" />
            Real-time Analysis
          </Badge>
        </div>
      </div>

      {/* AI Chat Interface */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare size={20} />
            <span>Chat with AI Assistant</span>
          </CardTitle>
          <CardDescription>Ask questions about your finances and get instant AI-powered insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto border rounded-lg p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white border shadow-sm'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border shadow-sm px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                      <span className="text-sm text-gray-600">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Chat Input */}
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about your spending, budgets, savings..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card key={index} className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className={`p-3 bg-gradient-to-r ${action.gradient} rounded-full w-fit`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {action.link ? (
                    <Link href={action.link}>
                      <Button className={`w-full bg-gradient-to-r ${action.gradient} hover:opacity-90`}>
                        {action.action}
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className={`w-full bg-gradient-to-r ${action.gradient} hover:opacity-90`}>
                      {action.action}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* AI Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain size={20} />
            <span>AI Capabilities</span>
          </CardTitle>
          <CardDescription>Explore what our AI can do for your financial management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${capability.color} bg-opacity-10`}>
                      <Icon size={20} className={`${capability.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{capability.title}</h4>
                        <Badge variant={capability.status === 'active' ? 'default' : 'secondary'}>
                          {capability.status === 'active' ? 'Active' : 'Coming Soon'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{capability.description}</p>
                      <p className="text-xs text-gray-500 italic">{capability.example}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb size={20} />
            <span>Recent AI Insights</span>
          </CardTitle>
          <CardDescription>Latest AI-generated insights about your finances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInsights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                insight.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                insight.type === 'success' ? 'bg-green-50 border-green-400' :
                'bg-blue-50 border-blue-400'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <h4 className={`font-medium ${
                      insight.type === 'warning' ? 'text-yellow-800' :
                      insight.type === 'success' ? 'text-green-800' :
                      'text-blue-800'
                    }`}>
                      {insight.title}
                    </h4>
                    <p className={`text-sm ${
                      insight.type === 'warning' ? 'text-yellow-700' :
                      insight.type === 'success' ? 'text-green-700' :
                      'text-blue-700'
                    }`}>
                      {insight.message}
                    </p>
                    <p className="text-xs text-gray-500">{insight.time}</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    {insight.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">95%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
            <div className="text-xs text-gray-500 mt-1">Transaction categorization</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">$2,340</div>
            <div className="text-sm text-gray-600">Avg. Monthly Savings</div>
            <div className="text-xs text-gray-500 mt-1">Identified by AI</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-sm text-gray-600">Transactions Processed</div>
            <div className="text-xs text-gray-500 mt-1">This month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-orange-600">0.3s</div>
            <div className="text-sm text-gray-600">Avg. Response Time</div>
            <div className="text-xs text-gray-500 mt-1">AI processing speed</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistantPage;
