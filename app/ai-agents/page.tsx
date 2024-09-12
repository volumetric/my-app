'use client';

import { useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from 'next/link';
import { aiAgents } from './aiAgentsData';

const categories = [
  "All",
  "Productivity & Task Management",
  "Research & Analysis",
  "Communication & Collaboration",
  "Content Creation & Editing",
  "Learning & Development"
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
            <Link href={`/ai-agents/${agent.id}`} key={index}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
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
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}