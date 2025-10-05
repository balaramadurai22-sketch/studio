export interface AIEvent {
    id: string;
    name: string;
    description: string;
    date: Date;
    registrationLink: string;
  }
  
  export const events: AIEvent[] = [
    {
      id: "event-1",
      name: "Webinar: The Future of Generative AI",
      description: "Join industry leaders as they discuss the next wave of generative models and their impact on creative fields.",
      date: new Date("2024-10-15T14:00:00Z"),
      registrationLink: "#",
    },
    {
      id: "event-2",
      name: "Workshop: Advanced Prompt Engineering",
      description: "A hands-on workshop covering techniques like chain-of-thought, few-shot learning, and structured outputs.",
      date: new Date("2024-10-22T10:00:00Z"),
      registrationLink: "#",
    },
    {
      id: "event-3",
      name: "Hackathon: AI for Social Good",
      description: "Build AI-powered solutions to tackle real-world challenges in sustainability, healthcare, and education.",
      date: new Date("2024-11-05T09:00:00Z"),
      registrationLink: "#",
    },
    {
      id: "event-4",
      name: "Fireside Chat: Ethics in AI",
      description: "A candid conversation with ethicists and researchers on building fair and accountable AI systems.",
      date: new Date("2024-11-18T17:00:00Z"),
      registrationLink: "#",
    },
  ];
  