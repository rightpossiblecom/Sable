import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "$2.4B+",
    label: "Assets Under Management",
  },
  {
    value: "99.97%",
    label: "System Uptime SLA",
  },
  {
    value: "500+",
    label: "Enterprise Clients",
  },
  {
    value: "24/7",
    label: "Global Support",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Cognitive Financial Intelligence",
    description:
      "Advanced machine learning algorithms deliver predictive analytics and autonomous financial decision-making capabilities",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Enterprise-Grade Analytics",
    description:
      "Real-time data processing with multi-dimensional analysis for strategic financial optimization and risk assessment",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Predictive Market Intelligence",
    description: "Leverage deep learning models for market trend forecasting and intelligent portfolio rebalancing",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Automated Compliance & Governance",
    description: "AI-driven regulatory compliance monitoring with automated risk mitigation and audit trail generation",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Global Financial Operations",
    description: "Multi-currency, multi-region financial management with real-time cross-border transaction processing",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Autonomous Decision Engine",
    description: "AI-powered autonomous financial decision-making with continuous learning and optimization algorithms",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Data Integration",
    description:
      "Seamless integration with existing enterprise systems, APIs, and data warehouses for comprehensive financial data aggregation",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. AI Processing",
    description:
      "Advanced machine learning algorithms process complex financial data to generate predictive insights and risk assessments",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Strategic Intelligence",
    description:
      "Deliver actionable intelligence through executive dashboards, automated reporting, and strategic recommendations",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "David Richardson",
    role: "Chief Financial Officer, Goldman Sachs",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "AI Financial Intelligence has revolutionized our risk management and predictive analytics capabilities. The autonomous decision-making features have improved our operational efficiency by 40%.",
  },
  {
    name: "Maria Santos",
    role: "Head of Digital Transformation, JPMorgan Chase",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "The cognitive computing platform delivers unprecedented insights into market trends and portfolio optimization. It's become essential to our strategic decision-making process.",
  },
  {
    name: "James Mitchell",
    role: "Managing Director, BlackRock",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    quote:
      "The enterprise-grade compliance monitoring and automated governance features have streamlined our regulatory reporting while maintaining the highest security standards.",
  },
];
