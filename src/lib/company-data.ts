import {
  Zap,
  BrainCircuit,
  Palette,
  Feather,
  Scale,
  GitBranch,
  Atom,
  Shield,
  LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";

export interface CompanyInitiative {
  id: string;
  name: string;
  description: string;
  fullDetails: string;
  Icon: ComponentType<{ className?: string }>;
}

export const companyInitiatives: CompanyInitiative[] = [
  {
    id: "aether-sim",
    name: "AetherSim Division",
    description: "Crafting hyper-realistic digital twins of complex systems for predictive analysis and simulation.",
    fullDetails: "The AetherSim Division pioneers the creation of 'digital twins'—high-fidelity, real-time virtual models of physical objects, processes, and even entire ecosystems. By harnessing AI and physics-based simulation, we allow industries to test, predict, and optimize performance in a risk-free environment, from aerospace engineering to urban planning.",
    Icon: Atom,
  },
  {
    id: "cognito-ethics",
    name: "Cognito-Ethics Unit",
    description: "Developing auditable AI frameworks that ensure ethical compliance and transparent decision-making.",
    fullDetails: "The Cognito-Ethics Unit is dedicated to embedding ethical reasoning into the core of AI. We create transparent, interpretable models and auditable logic pathways to ensure that automated decisions are fair, accountable, and aligned with human values. This initiative is crucial for deploying AI in sensitive sectors like law, finance, and public services.",
    Icon: Scale,
  },
  {
    id: "sentient-narratives",
    name: "Sentient Narratives Group",
    description: "Generative AI for dynamic, interactive storytelling and immersive entertainment experiences.",
    fullDetails: "This division is at the forefront of creative AI, building engines that can generate branching narratives, dynamic characters, and responsive worlds in real-time. Our technology empowers creators to build stories that adapt to user choices, creating deeply personal and endlessly replayable entertainment experiences for gaming, virtual reality, and interactive film.",
    Icon: Feather,
  },
  {
    id: "bio-harmony",
    name: "Bio-Harmony Project",
    description: "AI-driven ecological monitoring and restoration to help rebalance and preserve natural ecosystems.",
    fullDetails: "The Bio-Harmony Project uses a network of sensors and AI-powered drones to monitor biodiversity, detect pollution, and model ecosystem health. Our algorithms can predict the impact of environmental changes and recommend targeted interventions, such as reforestation patterns or species reintroduction, to restore ecological balance and combat climate change.",
    Icon: GitBranch,
  },
  {
    id: "quantal-core",
    name: "QuantalCore Labs",
    description: "Pioneering the intersection of quantum computing and machine learning for next-generation problem-solving.",
    fullDetails: "QuantalCore Labs is our deep-tech research division focused on creating quantum machine learning algorithms. We are exploring how quantum supremacy can solve optimization and simulation problems that are currently intractable for classical computers, with potential applications in drug discovery, materials science, and financial modeling.",
    Icon: BrainCircuit,
  },
  {
    id: "genesis-foundry",
    name: "Genesis Foundry",
    description: "An AI-powered incubator that helps startups ideate, validate, and prototype new products at unprecedented speed.",
    fullDetails: "The Genesis Foundry acts as a catalyst for innovation. We provide early-stage startups with a suite of AI tools that automate market research, generate branding and design concepts, and even create functional software prototypes. By accelerating the ideation-to-prototype cycle, we empower entrepreneurs to test their visions faster and more efficiently.",
    Icon: Zap,
  },
  {
    id: "aegis-protocol",
    name: "Aegis Protocol",
    description: "Developing next-generation cybersecurity solutions using adversarial AI to proactively identify and neutralize threats.",
    fullDetails: "The Aegis Protocol employs a 'digital immune system' approach to cybersecurity. We use a pair of dueling AIs—one that constantly searches for and creates new exploits, and another that learns from these attacks to patch vulnerabilities in real-time. This proactive, adaptive defense system is designed to protect critical infrastructure from an ever-evolving threat landscape.",
    Icon: Shield,
  },
  {
    id: "chroma-collective",
    name: "Chroma Collective",
    description: "A generative art initiative where AI collaborates with human artists to create novel forms of visual expression.",
    fullDetails: "The Chroma Collective is not about replacing artists, but augmenting them. We provide a platform where artists can train their own AI models on their unique styles, and then collaborate with these 'digital apprentices' to explore new aesthetic territories. The AI can suggest compositions, blend styles, or generate variations, acting as an tireless creative partner.",
    Icon: Palette,
  },
];

export const teamMembers = [
    { id: 'founder-bala', name: 'Bala Ramadurai', role: 'Founder & Chief Visionary' },
    { id: 'team-parthiban', name: 'Parthiban', role: 'Lead AI Architect' },
    { id: 'team-arun', name: 'Arun Kumar', role: 'Head of Engineering' },
    { id: 'team-vijay', name: 'Vijay K', role: 'Principal Research Scientist' },
    { id: 'team-dharshan', name: 'Dharshan', role: 'Product & Design Lead' },
    { id: 'team-giriraja', name: 'Giriraja', role: 'Head of Operations' },
    { id: 'team-sarathi', name: 'Sarathi', role: 'Senior Data Scientist' },
];
