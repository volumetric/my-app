'use client';

import { useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const categories = [
  "All",
  "Productivity & Task Management",
  "Research & Analysis",
  "Communication & Collaboration",
  "Content Creation & Editing",
  "Learning & Development"
];

const aiAgents = [
  {
    name: "Task Manager",
    description: "An AI agent that helps organize and prioritize tasks, ensuring efficient workflow management for teams.",
    image: "/images/task-manager.jpg",
    category: "Productivity & Task Management"
  },
  {
    name: "Meeting Assistant",
    description: "This AI agent takes notes, summarizes discussions, and helps schedule follow-ups during team meetings.",
    image: "/images/meeting-assistant.jpg",
    category: "Communication & Collaboration"
  },
  {
    name: "Code Reviewer",
    description: "An AI-powered code review assistant that helps identify potential bugs and suggests improvements.",
    image: "/images/code-reviewer.jpg",
    category: "Productivity & Task Management"
  },
  {
    name: "Customer Support Bot",
    description: "An AI agent that handles customer inquiries, providing quick and accurate responses to common questions.",
    image: "/images/customer-support.jpg",
    category: "Communication & Collaboration"
  },
  {
    name: "Data Analyst",
    description: "This AI agent helps analyze large datasets, providing insights and visualizations to support decision-making.",
    image: "/images/data-analyst.jpg",
    category: "Research & Analysis"
  },
  {
    name: "Content Creator",
    description: "An AI assistant that helps generate ideas and draft content for various marketing materials and social media.",
    image: "/images/content-creator.jpg",
    category: "Content Creation & Editing"
  },
  {
    name: "Research Assistant",
    description: "An AI agent that helps gather and summarize information from various sources for research projects.",
    image: "/images/research-assistant.jpg",
    category: "Research & Analysis"
  },
  {
    name: "Project Manager",
    description: "An AI assistant that helps track project progress, allocate resources, and identify potential bottlenecks.",
    image: "/images/project-manager.jpg",
    category: "Productivity & Task Management"
  },
  {
    name: "Language Tutor",
    description: "An AI-powered language learning assistant that provides personalized lessons and practice sessions.",
    image: "/images/language-tutor.jpg",
    category: "Learning & Development"
  },
  {
    name: "Email Assistant",
    description: "An AI agent that helps draft, prioritize, and manage emails to improve communication efficiency.",
    image: "/images/email-assistant.jpg",
    category: "Communication & Collaboration"
  },
  {
    name: "Presentation Designer",
    description: "An AI tool that assists in creating visually appealing and informative presentations.",
    image: "/images/presentation-designer.jpg",
    category: "Content Creation & Editing"
  },
  {
    name: "Skill Development Coach",
    description: "An AI coach that provides personalized guidance and resources for developing professional skills.",
    image: "/images/skill-coach.jpg",
    category: "Learning & Development"
  },
  {
    name: "Document Summarizer",
    description: "An AI agent that quickly summarizes long documents, reports, and articles for efficient information consumption.",
    image: "/images/document-summarizer.jpg",
    category: "Research & Analysis"
  },
  {
    name: "Brainstorming Partner",
    description: "An AI assistant that helps generate and refine ideas for various projects and problem-solving sessions.",
    image: "/images/brainstorming-partner.jpg",
    category: "Content Creation & Editing"
  },
  {
    name: "Time Management Advisor",
    description: "An AI agent that analyzes work patterns and provides suggestions for improving time management and productivity.",
    image: "/images/time-management.jpg",
    category: "Productivity & Task Management"
  }
];

export default function AIAgents() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAgents = aiAgents.filter(agent => 
    (selectedCategory === "All" || agent.category === selectedCategory) &&
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAvatarUrl = (seed: string) => {
    // Using DiceBear API with notionist style for avatar generation
    return `https://api.dicebear.com/6.x/notionists/svg?seed=${encodeURIComponent(seed)}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-400">AI Agent Templates</h1>
        
        <div className="flex justify-between items-center mb-8">
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search agents..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-green-500 flex items-center justify-center">
                <img 
                  src={getAvatarUrl(agent.name)} 
                  alt={agent.name} 
                  className="w-32 h-32"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-purple-400">{agent.name}</h2>
                <p className="text-gray-300 mb-2">{agent.description}</p>
                <p className="text-sm text-gray-400">{agent.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}