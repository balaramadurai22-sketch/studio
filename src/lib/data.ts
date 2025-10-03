import type { LucideIcon } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

export const user = {
  name: "Alex Duran",
  avatar: userAvatar?.imageUrl || "https://picsum.photos/seed/user/100/100",
};

export const chats = [
  { id: "1", title: "Project Plan for Q3", pinned: true },
  { id: "2", title: "React component brainstorming", pinned: false },
  { id: "3", title: "Python script for data analysis", pinned: false },
  { id: '4', title: 'Marketing copy for new feature' },
  { id: '5', title: 'How to use Docker with Next.js' },
];

type Agent = {
  id: string;
  name: string;
  icon: string; // lucide-react icon name
};

export const agents: Agent[] = [
  { id: "writer", name: "Writer", icon: "PenSquare" },
  { id: "coder", name: "Coder", icon: "CodeXml" },
  { id: "researcher", name: "Researcher", icon: "Library" },
];

export const tools = [
  { id: "web", name: "Web Browsing", icon: "Globe" },
  { id: "file", name: "File Analysis", icon: "FileText" },
];

export const projects = [
  { id: "proj1", name: "Mistral Next App" },
  { id: "proj2", name: "Marketing Campaign" },
];

export type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    avatar?: string;
    code?: string;
};

export const messages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "Can you help me design a database schema for a simple blog application?",
    avatar: user.avatar,
  },
  {
    id: "2",
    role: "assistant",
    content: `Of course! Here's a basic schema to get you started. It includes tables for users, posts, and comments.

We can break it down into three main tables:

1.  **Users**: Stores user information.
2.  **Posts**: Stores the blog posts themselves.
3.  **Comments**: Stores comments on posts.`,
    code: `CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT,
    user_id INT,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);`,
  },
  {
    id: "3",
    role: "user",
    content: "That looks great. Can you explain the FOREIGN KEY constraint?",
    avatar: user.avatar,
  },
  {
    id: "4",
    role: "assistant",
    content: `Certainly. A **FOREIGN KEY** is a key used to link two tables together. It's a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

In our schema:
- The \`posts.user_id\` refers to \`users.id\`. This ensures that every post is associated with a valid user.
- The \`comments.post_id\` refers to \`posts.id\`. This links each comment to a specific post.
- The \`comments.user_id\` refers to \`users.id\`. This shows who wrote the comment.

This constraint helps maintain data integrity, preventing actions that would leave "orphan" records. For example, you wouldn't be able to create a post for a \`user_id\` that doesn't exist in the \`users\` table.`,
  },
];
