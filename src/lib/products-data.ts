import { Bot, Code, Zap, BrainCircuit, Shield, BarChart, LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  Icon: ComponentType<{ className?: string }>;
}

export const products: Product[] = [
  {
    id: "product-1",
    name: "AI Assistant",
    description: "A powerful AI assistant for your daily tasks.",
    fullDescription: "Our AI Assistant is designed to help you with a wide range of tasks, from scheduling meetings to answering complex questions. It integrates seamlessly with your existing workflows and learns from your preferences to provide a personalized experience. Enhance your productivity and focus on what matters most.",
    Icon: Bot,
  },
  {
    id: "product-2",
    name: "Code Generator",
    description: "Generate high-quality code in seconds.",
    fullDescription: "The Code Generator is a state-of-the-art tool for developers. It can generate boilerplate code, write complex algorithms, and even debug your existing codebase. It supports multiple programming languages and frameworks, helping you to build applications faster and with fewer errors.",
    Icon: Code,
  },
  {
    id: "product-3",
    name: "Automation Engine",
    description: "Automate repetitive tasks with our powerful engine.",
    fullDescription: "Our Automation Engine allows you to create complex workflows to automate repetitive tasks. From data entry to report generation, you can design custom automations that save you time and reduce the risk of human error. It's a flexible and scalable solution for businesses of all sizes.",
    Icon: Zap,
  },
  {
    id: "product-4",
    name: "Cognitive Platform",
    description: "Unlock insights from your data with our cognitive platform.",
    fullDescription: "The Cognitive Platform uses advanced machine learning models to analyze your data and uncover hidden insights. It can identify trends, make predictions, and provide actionable recommendations. Turn your data into a strategic asset and make smarter business decisions.",
    Icon: BrainCircuit,
  },
  {
    id: "product-5",
    name: "Security Shield",
    description: "Protect your applications with our AI-powered security.",
    fullDescription: "Security Shield is an AI-powered security solution that protects your applications from threats in real-time. It can detect and block malicious activity, identify vulnerabilities, and provide detailed security reports. Keep your data and your users safe with our proactive security measures.",
    Icon: Shield,
  },
  {
    id: "product-6",
    name: "Analytics Pro",
    description: "Get a deeper understanding of your business with our analytics tool.",
    fullDescription: "Analytics Pro provides you with a comprehensive suite of tools to track and analyze your business performance. Create custom dashboards, visualize your data, and get detailed reports on your key metrics. It's a powerful tool for data-driven decision making.",
    Icon: BarChart,
  },
];
