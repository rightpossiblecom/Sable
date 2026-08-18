import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Bot, 
  PieChart, 
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Zap
} from "lucide-react";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";

const SableLanding = () => {
  const features = [
    {
      icon: Bot,
      title: "A mind on the household books",
      description: "Read a year of spend, school fees, and land payments the way a family office reads a corridor — before the money leaves the continent."
    },
    {
      icon: PieChart,
      title: "Books the firm can stand on",
      description: "Operating, reserve, trading, and title in one house. Lagos, Accra, Nairobi, and Johannesburg on the same desk."
    },
    {
      icon: TrendingUp,
      title: "Trade that compounds for the children",
      description: "See what the Accra desk and the Kilimani rent are building, then move the surplus into land and reserve — not another month of leak."
    },
    {
      icon: Target,
      title: "A house that keeps its own record",
      description: "Receipts, recurring levies, and title costs stay in the ledger. The next generation should not inherit a folder of WhatsApp transfers."
    }
  ];

  const stats = [
    { number: "4", suffix: "", label: "Books in a working house" },
    { number: "7", suffix: "", label: "Cities on the first corridor" },
    { number: "30", suffix: "", label: "Years the house is built to stand" }
  ];

  const pricingPlans = [
    {
      name: "House",
      price: "₦180k",
      period: "/month",
      description: "The family ledger for a Lagos or Accra household that already owns more than one book",
      features: [
        "Four household books",
        "Receipt reading",
        "Budget alerts on the operating line",
        "Naira, cedi, and shilling desks",
        "Monthly house letter",
        "Desk in Lagos hours"
      ],
      highlighted: false
    },
    {
      name: "Chamber",
      price: "₦650k",
      period: "/month",
      description: "The firm desk — operators, warehouses, and a reserve that must outlive one founder",
      features: [
        "Unlimited books",
        "Corridor analytics",
        "Family-office seating",
        "A named clerk on the house",
        "Title and school-fee calendars",
        "Priority reading of the year"
      ],
      highlighted: true
    },
    {
      name: "Family office",
      price: "Custom",
      period: "",
      description: "A private Sable for dynasties, funds, and houses that already sit across the continent",
      features: [
        "Private house deployment",
        "Counsel and title suite",
        "Multi-desk architecture",
        "Executive ledger",
        "Lagos and Johannesburg partners",
        "A clerk who knows the family"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                The ledger African houses keep
              </span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6">
              Wealth that stays
              <br />
              <span className="text-5xl md:text-6xl">on the continent</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Sable is the household ledger for African families and firms. Accounts, budgets, and receipts — so land, trade, and school fees compound for the children, not for a bank in another hemisphere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                  Sign up
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-medium rounded-full">
                  Log in
                </Button>
              </Link>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Household Intelligence Suite</h3>
                    <p className="text-gray-600">Lagos, Accra, and Nairobi on one desk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 mb-8 font-medium">Trusted by houses, desks, and banks that already work the corridor</p>
            <div className="flex justify-center items-center space-x-12 opacity-60 flex-wrap gap-y-4">
              <div className="font-bold text-xl text-gray-700">Access Bank</div>
              <div className="font-bold text-xl text-gray-700">GTBank</div>
              <div className="font-bold text-xl text-gray-700">Standard Bank</div>
              <div className="font-bold text-xl text-gray-700">Equity</div>
              <div className="font-bold text-xl text-gray-700">Absa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Bot className="w-4 h-4 mr-2" />
              What the house holds
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              A ledger that outlives one founder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The work is not another dashboard. It is keeping school fees, title, and trade inside a house the grandchildren can still open.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the long house
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Families and firms from Lagos to Johannesburg already keep the year in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}<span className="text-blue-200">{stat.suffix}</span>
                </div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Zap className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              How a house keeps the money
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bring the books</h3>
              <p className="text-gray-600 leading-relaxed">
                Open operating, reserve, trading, and title. Shoprite receipts, GTBank standing orders, and the Lekki survey sit in the same house.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Read the year</h3>
              <p className="text-gray-600 leading-relaxed">
                The assistant reads spend against the line, flags a retainer that should not sit on the operating book, and keeps school fees on the calendar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep the land</h3>
              <p className="text-gray-600 leading-relaxed">
                Move surplus from the Accra desk and the Kilimani rent into reserve and title. That is how a house still matters in thirty years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <DollarSign className="w-4 h-4 mr-2" />
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Seats in the house
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seat for the household, the firm, or the family office. Lagos pricing. Johannesburg counsel when the house needs it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white relative' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.name === "Chamber" ? "/contact" : "/signup"}>
                  <Button 
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.name === "Chamber" ? "Contact the house" : "Sign up"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Open a Sable account for the next generation
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Families, operators, and family offices from Lagos to Nairobi already keep the year in this house. The land should still be in the family when the children open the ledger.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                Sign up
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-full">
                Contact the house
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SableLanding;
