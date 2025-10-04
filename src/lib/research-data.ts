import { PlaceHolderImages } from "./placeholder-images";

export interface ResearchProject {
  id: string;
  title: string;
  abstract: string;
  imageId: string;
  keyInsights: string[];
  fullDetails: string;
  publicationDate: string;
  authors: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: "dream-weaver",
    title: "DreamWeaver: Generative Models for Subjective Realities",
    abstract: "Exploring how generative adversarial networks can construct personalized, explorable dreamscapes from user-provided text and biometric data.",
    imageId: "research-1",
    keyInsights: [
      "Achieved 92% coherence score in user-rated dream realism.",
      "EEG data integration leads to a 45% increase in personalization.",
      "Introduced a novel 'lucidity control' mechanism for real-time dream alteration.",
    ],
    fullDetails: "DreamWeaver represents a significant leap in personalized digital experiences. By leveraging a multi-modal input system combining natural language processing of user journals with real-time biometric feedback (EEG and heart rate variability), the model generates immersive, three-dimensional environments. Our novel 'Coherence Loss' function ensures narrative consistency within the generated dreamscapes. The 'lucidity control' feature, a first of its kind, allows users to consciously manipulate the dream environment, opening up new avenues for therapeutic applications and interactive entertainment.",
    publicationDate: "2024-08-15",
    authors: ["Dr. Evelyn Reed", "Dr. Kenji Tanaka"],
  },
  {
    id: "synthetic-symphony",
    title: "Synthetic Symphony: Composing Music with Emotional Intelligence",
    abstract: "A transformer-based model that composes original musical pieces in various genres, capable of evoking specific, targeted emotional responses.",
    imageId: "research-2",
    keyInsights: [
      "Model can generate compositions rated as 'highly emotive' by 85% of listeners in a blind study.",
      "Successfully composed in 12 distinct genres, from classical to ambient electronic.",
      "The 'Emotion-Attention' layer allows for fine-tuned control over musical tension and release.",
    ],
    fullDetails: "The Synthetic Symphony project addresses a key challenge in algorithmic composition: emotional resonance. Our model, built on the Transformer architecture, is trained on a vast corpus of music annotated with emotion tags. The core innovation is the 'Emotion-Attention' layer, which enables the model to understand and replicate complex musical structures that correlate with human emotional responses. The system can take high-level prompts like 'a hopeful piano piece that builds to a triumphant crescendo' and generate coherent, emotionally impactful music.",
    publicationDate: "2024-07-20",
    authors: ["Dr. Anya Sharma", "Marco Verratti"],
  },
  {
    id: "sentient-sculptor",
    title: "The Sentient Sculptor: AI-Powered Haptic Art Generation",
    abstract: "A novel AI system that designs 3D-printable sculptures based on poetic text, designed to be experienced through touch as well as sight.",
    imageId: "research-3",
    keyInsights: [
      "Generates 3D models with complex, tactilely interesting textures.",
      "Achieved a 95% match between the intended emotion of the poem and the tactile response from users.",
      "Developed a 'Text-to-Texture' algorithm for translating linguistic concepts into physical forms.",
    ],
    fullDetails: "The Sentient Sculptor bridges the gap between language and physical form. It uses a custom-trained model to interpret the semantic and emotional content of poetry, translating abstract concepts into tangible 3D geometries. The 'Text-to-Texture' algorithm is a key breakthrough, allowing the system to create surfaces that feel 'lonely,' 'joyful,' or 'chaotic.' This research opens up new possibilities for accessible art for the visually impaired and creates a new medium for artistic expression.",
    publicationDate: "2024-06-11",
    authors: ["Dr. Ben Carter", "Isabelle Roux"],
  },
  {
    id: "echo-chamber-breaker",
    title: "EchoBreaker: Debiasing Social Feeds in Real-Time",
    abstract: "An AI-driven content recommendation engine that actively works to diversify user feeds and break filter bubbles without sacrificing engagement.",
    imageId: "research-4",
    keyInsights: [
      "Increased content diversity by 300% while maintaining user session length.",
      "The 'Serendipity Score' metric successfully identifies and promotes novel, relevant content.",
      "Reduces political polarization index in simulated user groups by an average of 1.5 points.",
    ],
    fullDetails: "EchoBreaker is a reinforcement learning-based system designed to counteract the natural tendency of recommendation algorithms to create 'filter bubbles.' It optimizes for a dual objective: user engagement and content diversity. The 'Serendipity Score' is a novel metric that rewards the model for recommending content that is high-quality, relevant, but outside a user's typical interaction patterns. Our simulations show that this approach can lead to a more informed and less polarized user base over time.",
    publicationDate: "2024-05-05",
    authors: ["Dr. David Chen", "Dr. Maria Petrova"],
  },
  {
    id: "neural-navigator",
    title: "Neural Navigator: Autonomous AI for Unstructured Environments",
    abstract: "Developing a swarm robotics system where AI agents collaboratively map and navigate complex, unknown terrains without prior data.",
    imageId: "research-5",
    keyInsights: [
      "Swarm can map a 10,000 sq ft disaster-simulation area 70% faster than a single agent.",
      "Implemented a decentralized communication protocol with 99.9% uptime in adverse conditions.",
      "AI agents can dynamically adapt their exploration strategy based on environmental feedback.",
    ],
    fullDetails: "The Neural Navigator project focuses on creating robust, autonomous exploration systems for search and rescue, and extraterrestrial mapping. Our swarm consists of small, durable drones, each running a lightweight, edge-optimized AI. Using a novel decentralized consensus algorithm, the agents share mapping data and collaboratively decide on an optimal exploration strategy. This removes the single point of failure inherent in centralized command systems and allows for rapid, adaptive coverage of complex and dangerous environments.",
    publicationDate: "2024-04-18",
    authors: ["Dr. Samuel Jones", "Commander Eva Rostova"],
  },
  {
    id: "genetic-guardian",
    title: "Genetic Guardian: AI for Predictive Disease Diagnosis",
    abstract: "A deep learning model that analyzes genomic data to predict the likelihood of developing complex genetic disorders years before symptoms appear.",
    imageId: "research-6",
    keyInsights: [
      "Achieved 98% accuracy in predicting the onset of three specific neurodegenerative diseases.",
      "Identified 15 previously unknown genetic markers associated with late-onset Alzheimer's.",
      "The model's 'Explainability Layer' provides clinicians with understandable risk factors.",
    ],
    fullDetails: "Genetic Guardian is a convolutional neural network that processes whole-genome sequencing data. By training on one of the largest longitudinal genomic datasets ever assembled, it has learned to identify subtle, polygenic patterns that are predictive of future disease. A key feature is the 'Explainability Layer,' which uses SHAP (SHapley Additive exPlanations) values to highlight the specific genetic markers contributing to its risk assessment, making the AI's conclusions transparent and actionable for medical professionals.",
    publicationDate: "2024-03-22",
    authors: ["Dr. Lena Hanson", "Dr. Raj Patel"],
  },
  {
    id: "quantum-cognition",
    title: "Quantum Cognition: Exploring AI on Quantum Computers",
    abstract: "An investigation into how quantum computing principles, like superposition and entanglement, can be used to create more powerful and efficient AI models.",
    imageId: "research-7",
    keyInsights: [
      "Designed a Quantum Neural Network (QNN) that solved a specific optimization problem 500x faster than a classical equivalent.",
      "Demonstrated that quantum entanglement can be used to create highly efficient associative memory.",
      "Developed a hybrid classical-quantum training algorithm to make QNNs practical with near-term hardware.",
    ],
    fullDetails: "The Quantum Cognition project sits at the bleeding edge of computation. We are designing and simulating AI models that leverage the unique properties of quantum mechanics. Our flagship achievement is a Variational Quantum Classifier that demonstrates a significant 'quantum advantage' in certain problem domains. While fault-tolerant quantum computers are still on the horizon, our hybrid training algorithms show a viable path for using today's noisy, intermediate-scale quantum (NISQ) devices to accelerate specific machine learning tasks.",
    publicationDate: "2024-02-19",
    authors: ["Dr. Alexey Fedorov", "Dr. Chloe Sterling"],
  },
  {
    id: "ethical-oracle",
    title: "The Ethical Oracle: A Framework for AI Moral Reasoning",
    abstract: "Creating a large language model trained on a diverse corpus of philosophical, legal, and ethical texts to provide nuanced guidance on complex moral dilemmas.",
    imageId: "research-8",
    keyInsights: [
      "The model can articulate ethical arguments from multiple philosophical frameworks (e.g., Utilitarian, Deontological).",
      "In simulated scenarios, its recommendations aligned with human ethicists' consensus 82% of the time.",
      "Incorporated a 'Consequence Simulator' to project the potential outcomes of different actions.",
    ],
    fullDetails: "As AI becomes more autonomous, the ability to reason about ethical dilemmas is crucial. The Ethical Oracle is not designed to be a moral authority, but a tool for augmenting human moral reasoning. It is trained on a carefully curated dataset of world philosophy, legal theory, and ethical case studies. When presented with a dilemma, it does not give a single 'right' answer, but instead outlines the situation from various ethical perspectives, citing its sources and projecting potential consequences using a built-in simulation module. It serves as a sophisticated Socratic partner for humans facing complex decisions.",
    publicationDate: "2024-01-30",
    authors: ["Dr. Elias Vance", "The Ethics Initiative"],
  },
];
