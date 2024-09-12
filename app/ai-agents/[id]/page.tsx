'use client';

import { useParams } from 'next/navigation';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { aiAgents } from '../aiAgentsData';

export default function AIAgentPage() {
  const { id } = useParams();
  const agent = aiAgents.find(agent => agent.id === id);

  if (!agent) {
    return <div>AI Agent not found</div>;
  }

  const getAvatarUrl = (seed: string) => {
    // Using DiceBear API with notionist style for avatar generation
    return `https://api.dicebear.com/6.x/notionists/svg?seed=${encodeURIComponent(seed)}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      
      <main className="container mx-auto px-4 py-20 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-green-400">{agent.name}</h1>
          <p className="text-sm text-gray-400 mb-4">{agent.category}</p>
          <img src={getAvatarUrl(agent.name)} alt={agent.name} className="w-32 h-32 mb-4" />
          <p className="text-gray-300">{agent.description}</p>
        </div>
        <div className="md:w-1/2">
          <iframe
            src="https://chatbot.hellotars.com/conv/_-ppOW"
            className="w-full h-[600px] border-none rounded-lg shadow-lg"
            title="Chatbot"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}