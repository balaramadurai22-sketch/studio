import {
  Sparkles,
  Feather,
  GitBranch,
  BrainCircuit,
  Scale,
  Palette,
  Bot,
  Zap,
  LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceAnnotation: string;
  features: string[];
  fullDetails: string;
  Icon: ComponentType<{ className?: string }>;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "dream-sculptor",
    name: "Dream Sculptor",
    price: "$42",
    priceAnnotation: "/month/user",
    features: [
      "Access to subjective reality generation",
      "100 dreamscape renders per month",
      "Basic EEG data integration",
      "Community support",
    ],
    fullDetails:
      "The Dream Sculptor plan is your entry into the world of personalized digital experiences. Generate up to 100 unique dreamscapes a month based on your text inputs. With basic EEG integration, the AI can subtly tailor environments to your passive biometric feedback, creating more resonant and personal realities. Ideal for artists, writers, and individuals seeking inspiration.",
    Icon: Palette,
  },
  {
    id: "symphony-maestro",
    name: "Symphony Maestro",
    price: "$99",
    priceAnnotation: "/month/studio",
    features: [
      "AI music composition in 12 genres",
      "Emotion-Attention layer control",
      "Unlimited track generation",
      "Commercial use license",
    ],
    fullDetails:
      "For the professional musician or creative studio, the Symphony Maestro plan unlocks the full potential of our emotionally intelligent music composition AI. Generate unlimited, royalty-free compositions across a dozen genres. Fine-tune the emotional arc of each piece with direct access to the 'Emotion-Attention' layer, controlling tension and release with precision. Includes a full commercial license for all generated works.",
    Icon: Bot,
  },
  {
    id: "echo-breaker-pro",
    name: "EchoBreaker Pro",
    price: "$250",
    priceAnnotation: "/month/platform",
    features: [
      "Real-time feed debiasing",
      "Serendipity Score optimization",
      "Polarization index monitoring",
      "API access for integration",
    ],
    fullDetails:
      "Integrate our EchoBreaker technology into your content platform. This plan provides API access to our reinforcement learning model, allowing you to actively diversify your users' content feeds. It's designed to increase exposure to novel ideas without sacrificing user engagement. Monitor your platform's health with our political polarization index and optimize for a more informed, less-divided user base.",
    Icon: Scale,
  },
  {
    id: "sentient-artisan",
    name: "Sentient Artisan",
    price: "$75",
    priceAnnotation: "/creation",
    features: [
      "Text-to-haptic 3D model generation",
      "High-resolution STL export",
      "Poetry & prose input",
      "Private gallery for your creations",
    ],
    fullDetails:
      "A revolutionary plan for artists and designers. Transform your written words—be it poetry, prose, or abstract concepts—into tangible, 3D-printable sculptures. The Sentient Artisan AI translates linguistic and emotional data into complex, tactilely interesting forms. Each creation is a unique physical manifestation of your text. Priced per-creation, you only pay for the models you generate and export.",
    Icon: Feather,
  },
  {
    id: "navigator-swarm",
    name: "Navigator Swarm",
    price: "Contact Us",
    priceAnnotation: "for enterprise",
    features: [
      "Deployment of autonomous AI agents",
      "Collaborative mapping of unknown areas",
      "Decentralized communication protocol",
      "For enterprise & research use",
    ],
    fullDetails:
      "This is an enterprise-level solution for search and rescue, industrial inspection, or academic research. Deploy a swarm of our AI-powered drones to autonomously map and navigate unstructured environments. The system is robust, decentralized, and requires no prior data of the area. Pricing is customized based on the scale of deployment, hardware requirements, and support level. Contact us for a consultation.",
    Icon: Zap,
  },
  {
    id: "guardian-insight",
    name: "Guardian Insight",
    price: "$1,200",
    priceAnnotation: "/genome analysis",
    features: [
      "Predictive analysis of genomic data",
      "Reports on 20+ genetic disorders",
      "Full Explainability Layer access",
      "Consultation with a genetic counselor",
    ],
    fullDetails:
      "A comprehensive, one-time analysis of your genomic data. Our Genetic Guardian AI provides a detailed report on your predisposition to over 20 complex genetic disorders, years before symptoms might appear. The results are delivered with full access to our 'Explainability Layer,' making the AI's reasoning transparent. The plan includes a virtual consultation with a certified genetic counselor to help you understand the findings.",
    Icon: BrainCircuit,
  },
  {
    id: "quantum-pioneer",
    name: "Quantum Pioneer",
    price: "$5,000",
    priceAnnotation: "/hr of QPU time",
    features: [
      "Access to hybrid quantum-classical AI",
      "Run on near-term quantum hardware",
      "For solving complex optimization problems",
      "Dedicated research support",
    ],
    fullDetails:
      "For researchers and institutions tackling intractable problems. The Quantum Pioneer plan provides hourly access to our hybrid quantum-classical computing stack. Utilize our Quantum Neural Networks to find solutions to complex optimization, simulation, and cryptography problems that are beyond the scope of classical computers. This plan is for cutting-edge research and includes support from our quantum computing specialists.",
    Icon: Sparkles,
  },
  {
    id: "ethical-oracle-gov",
    name: "Ethical Oracle (Gov)",
    price: "Inquire",
    priceAnnotation: "for policy & governance",
    features: [
      "AI moral reasoning framework access",
      "Simulate societal impact of policies",
      "Multi-framework ethical analysis",
      "For government and regulatory bodies",
    ],
    fullDetails:
      "A specialized version of our Ethical Oracle, designed for policymakers, NGOs, and corporate ethics boards. This tool allows you to model the potential long-term societal impact of new laws, policies, or large-scale technological deployments. The AI provides a nuanced analysis from multiple philosophical and legal frameworks, helping you anticipate unintended consequences and build more responsible, equitable systems. Inquire for institutional licensing.",
    Icon: GitBranch,
  },
];
