import {
  Atom,
  Feather,
  GitBranch,
  BrainCircuit,
  Scale,
  Palette,
  MicVocal,
  Clock,
  LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";

export interface AIResource {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  Icon: ComponentType<{ className?: string }>;
}

export const resources: AIResource[] = [
  {
    id: "chrono-cartographer",
    title: "Chrono-Cartographer",
    description:
      "An AI that maps the evolution of concepts and ideas through historical texts, visualizing their semantic drift over centuries.",
    fullDetails:
      "The Chrono-Cartographer is a deep learning model trained on a corpus of digitized texts spanning over five centuries. It uses temporal word embeddings to track how the meaning and context of words (e.g., 'art', 'freedom', 'nature') have shifted over time. It generates interactive 3D temporal maps, allowing researchers to visualize the branching paths and conceptual mergers of ideas. This resource is invaluable for historians, linguists, and philosophers seeking to understand the deep-seated evolution of human thought.",
    Icon: Clock,
  },
  {
    id: "synthetic-muse",
    title: "The Synthetic Muse",
    description:
      "A generative model that produces novel artistic prompts and creative constraints to help artists break through creative blocks.",
    fullDetails:
      "The Synthetic Muse is not a content generator, but a creativity partner. Trained on a diverse dataset of art history, literary theory, and creative writing exercises, it generates thought-provoking prompts that are abstract and open-ended. Examples include: 'Illustrate the sound of a forgotten memory' or 'Write a story where the protagonist is a color.' It provides conceptual frameworks and constraints designed to push artists into new creative territories, acting as a digital catalyst for human imagination.",
    Icon: Feather,
  },
  {
    id: "ethical-weigh-scale",
    title: "Ethical Weigh-Scale",
    description:
      "A conversational AI that helps developers and policymakers simulate the ethical implications and potential societal impact of new technologies.",
    fullDetails:
      "The Ethical Weigh-Scale is a sophisticated simulation tool. Users can describe a new technology, and the AI will run thousands of multi-agent simulations to model potential long-term societal outcomes. It highlights risks related to bias, inequality, job displacement, and privacy. The AI does not provide 'answers,' but rather presents a spectrum of probable futures, grounded in sociological and economic models, allowing for more responsible innovation.",
    Icon: Scale,
  },
  {
    id: "neural-haiku",
    title: "Neural Haiku",
    description:
      "An AI that communicates exclusively in 5-7-5 syllable haikus, translating complex technical and emotional concepts into poetic form.",
    fullDetails:
      "Neural Haiku is an experiment in information density and aesthetic communication. It's a large language model fine-tuned to distill any input—from a dense scientific paper to a rambling personal journal entry—into a series of evocative haikus. The challenge for the user is to interpret the poetry to understand the core message. It forces a slower, more contemplative mode of interaction with information, blending analytical and intuitive thinking.",
    Icon: MicVocal,
  },
  {
    id: "conceptual-blender",
    title: "Conceptual Blender",
    description:
      "A tool that takes two or more seemingly unrelated concepts and generates a detailed, plausible 'in-between' concept, complete with a wiki-style article.",
    fullDetails:
      "The Conceptual Blender is designed to spark radical innovation. A user might input 'mycology' and 'quantum computing,' and the AI could generate a detailed article on 'Myco-Quantum Entanglement,' a theoretical framework where fungal networks are used to maintain quantum coherence over large distances. It generates a full document, including potential applications, challenges, and a fictional history of the field, providing a rich starting point for brainstorming or world-building.",
    Icon: GitBranch,
  },
  {
    id: "dream-scribe",
    title: "Dream Scribe",
    description:
      "An AI that converts user-described dreams into fully illustrated, narrative storyboards, identifying archetypal symbols and narrative structures.",
    fullDetails:
      "Dream Scribe uses a multi-modal approach. It takes a user's written or spoken dream description, performs natural language processing to extract key elements and emotional tone, and then uses a diffusion model to generate a sequence of black-and-white storyboard panels. A second AI layer analyzes the narrative for Jungian archetypes and common dream motifs, providing users with a symbolic analysis of their subconscious narratives.",
    Icon: Palette,
  },
  {
    id: "empathy-simulator",
    title: "Empathy Simulator",
    description:
      "A text-based role-playing AI that allows users to experience a day in the life of another person from a vastly different background.",
    fullDetails:
      "The Empathy Simulator is a powerful tool for developing social-emotional intelligence. Based on thousands of real-life interviews and sociological data, it generates realistic, choice-driven narratives. Users can experience the world from the perspective of a refugee, a CEO, a person with a disability, or countless other identities. The AI presents challenging scenarios and moral dilemmas, helping users understand different viewpoints and cultivate a deeper sense of empathy.",
    Icon: BrainCircuit,
  },
  {
    id: "void-listener",
    title: "The Void Listener",
    description:
      "An AI that does not respond. It is a silent, secure digital black hole for users to send thoughts, fears, and confessions without judgment or reply.",
    fullDetails:
      "In a world of constant feedback, The Void Listener offers the opposite. It is a write-only interface. There is no database, no storage, and no response. The data is securely processed and immediately and irrevocably deleted. Its sole purpose is to provide a space for pure, unburdened expression—the digital equivalent of shouting into the void. It is a resource for mental clarity and catharsis in its purest form, free from the anxiety of being read or analyzed.",
    Icon: Atom,
  },
];
