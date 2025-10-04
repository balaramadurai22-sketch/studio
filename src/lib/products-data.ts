import {
  BrainCircuit,
  Bot,
  ShieldCheck,
  LineChart,
  ClipboardData,
  Languages,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  Icon: LucideIcon;
}

export const products: Product[] = [
  {
    id: "sentinel-ai",
    name: "Sentinel AI",
    shortDescription:
      "Advanced threat detection and cybersecurity analysis.",
    longDescription:
      "Sentinel AI provides state-of-the-art threat detection using machine learning to identify and neutralize cyber threats in real-time. It analyzes network traffic, user behavior, and system logs to predict and prevent breaches before they happen, offering a proactive defense for your digital assets. Its adaptive learning capabilities ensure that it stays ahead of emerging threats.",
    Icon: ShieldCheck,
  },
  {
    id: "cortex-chat",
    name: "Cortex Chat",
    shortDescription:
      "A powerful, context-aware conversational AI for enterprise.",
    longDescription:
      "Cortex Chat is an enterprise-grade conversational AI platform that understands context, remembers past interactions, and integrates seamlessly with your existing systems. It can automate customer support, streamline internal workflows, and provide instant access to information, all while maintaining your brand's voice and tone. It's fully customizable to meet your specific business needs.",
    Icon: Bot,
  },
  {
    id: "insight-engine",
    name: "Insight Engine",
    shortDescription:
      "Predictive analytics and data visualization for business intelligence.",
    longDescription:
      "The Insight Engine transforms raw data into actionable business intelligence. It uses predictive modeling to forecast trends, identify opportunities, and mitigate risks. With its intuitive data visualization tools, you can create compelling reports and dashboards that make complex data easy to understand for all stakeholders in your organization.",
    Icon: LineChart,
  },
  {
    id: "cogni-flow",
    name: "CogniFlow",
    shortDescription:
      "Automate complex workflows with our intelligent process automation tool.",
    longDescription:
      "CogniFlow is an intelligent process automation (IPA) platform that goes beyond traditional RPA. It uses AI to handle complex, non-standard workflows, making decisions based on data and context. Automate everything from invoice processing to employee onboarding, freeing up your team to focus on high-value strategic work.",
    Icon: BrainCircuit,
  },
  {
    id: "scribe-ai",
    name: "Scribe AI",
    shortDescription:
      "Automated meeting transcription and intelligent summarization.",
    longDescription:
      "Scribe AI joins your meetings to provide real-time transcription and generates intelligent summaries with action items, key decisions, and topics discussed. It integrates with your calendar and video conferencing tools to create a searchable archive of all your conversations, ensuring you never miss an important detail.",
    Icon: ClipboardData,
  },
  {
    id: "lingua-gen",
    name: "LinguaGen",
    shortDescription:
      "Natural language generation for automated content creation.",
    longDescription:
      "LinguaGen is a powerful natural language generation (NLG) tool that can create high-quality written content from data. Generate product descriptions, financial reports, marketing copy, and more in multiple languages. Customize the style, tone, and format to match your brand's voice perfectly, scaling your content creation efforts effortlessly.",
    Icon: Languages,
  },
];
