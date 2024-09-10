'use client';

import { useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function GenerateImage() {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('dalle-3');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-400">Generate Image</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-1">Image Prompt</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Describe the image you want to generate..."
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-1">Model</label>
                <select
                  id="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="dalle-3">DALL-E 3</option>
                  <option value="dalle-2">DALL-E 2</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
              >
                {isLoading ? 'Generating...' : 'Generate Image'}
              </button>
            </form>
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </div>
          <div className="w-full md:w-1/2">
            {imageUrl ? (
              <img src={imageUrl} alt="Generated image" className="w-full h-auto rounded-lg shadow-lg" />
            ) : (
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Generated image will appear here</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}