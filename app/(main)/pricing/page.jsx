import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Building } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for getting started with personal finance",
      icon: Zap,
      features: [
        "Up to 100 transactions/month",
        "1 bank account",
        "Basic budget tracking",
        "Mobile app access",
        "Email support"
      ],
      limitations: [
        "Limited transaction history",
        "No data export",
        "Basic reporting only"
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Pro",
      price: 29,
      description: "Best for individuals and small families",
      icon: Crown,
      features: [
        "Unlimited transactions",
        "Up to 10 accounts",
        "Advanced analytics",
        "Export to CSV/PDF",
        "Receipt scanning",
        "Budget alerts",
        "Priority email support",
        "Custom categories"
      ],
      limitations: [],
      buttonText: "Upgrade to Pro",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Business",
      price: 99,
      description: "Perfect for small businesses and teams",
      icon: Building,
      features: [
        "Everything in Pro",
        "Unlimited accounts",
        "Team collaboration",
        "Advanced reporting",
        "API access",
        "Custom integrations",
        "Phone support",
        "Dedicated account manager"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 14-day free trial for all paid plans. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely! You can cancel your subscription at any time. Your data will remain accessible until the end of your billing period."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Choose Your Plan</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Start free and scale as you grow. All plans include our core features with premium options for advanced users.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-3 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Icon size={24} className={plan.popular ? 'text-blue-600' : 'text-gray-600'} />
                </div>
                
                <div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </div>
                
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                    {plan.price > 0 && <span className="text-lg font-normal text-gray-600">/month</span>}
                  </div>
                  {plan.price > 0 && (
                    <p className="text-sm text-gray-500">Billed monthly</p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button 
                  className="w-full" 
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What&apos;s included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-3 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-sm text-gray-500">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Feature Comparison */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Feature Comparison</CardTitle>
            <CardDescription className="text-center">
              Compare features across all plans to find what works best for you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 font-medium text-gray-900">Feature</th>
                    <th className="text-center py-4 font-medium text-gray-900">Free</th>
                    <th className="text-center py-4 font-medium text-gray-900">Pro</th>
                    <th className="text-center py-4 font-medium text-gray-900">Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 text-gray-600">Monthly Transactions</td>
                    <td className="py-3 text-center">100</td>
                    <td className="py-3 text-center">Unlimited</td>
                    <td className="py-3 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 text-gray-600">Bank Accounts</td>
                    <td className="py-3 text-center">1</td>
                    <td className="py-3 text-center">10</td>
                    <td className="py-3 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 text-gray-600">Data Export</td>
                    <td className="py-3 text-center">❌</td>
                    <td className="py-3 text-center">✅</td>
                    <td className="py-3 text-center">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 text-gray-600">Receipt Scanning</td>
                    <td className="py-3 text-center">❌</td>
                    <td className="py-3 text-center">✅</td>
                    <td className="py-3 text-center">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 text-gray-600">Team Collaboration</td>
                    <td className="py-3 text-center">❌</td>
                    <td className="py-3 text-center">❌</td>
                    <td className="py-3 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-600">API Access</td>
                    <td className="py-3 text-center">❌</td>
                    <td className="py-3 text-center">❌</td>
                    <td className="py-3 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of users who trust Welth to manage their finances
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Start Free Trial</Button>
          <Button variant="outline" size="lg">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
