'use client';

import { useState, useEffect } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const dalle3Resolutions = [
  { label: '1024x1024', value: '1024x1024' },
  { label: '1792x1024', value: '1792x1024' },
  { label: '1024x1792', value: '1024x1792' },
];

const dalle2Resolutions = [
  { label: '256x256', value: '256x256' },
  { label: '512x512', value: '512x512' },
  { label: '1024x1024', value: '1024x1024' },
];

export default function GenerateImage() {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('dalle-3');
  const [resolution, setResolution] = useState('1024x1024');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resolutions, setResolutions] = useState(dalle3Resolutions);

  useEffect(() => {
    setResolutions(model === 'dalle-3' ? dalle3Resolutions : dalle2Resolutions);
    setResolution('1024x1024'); // Reset to a common resolution when changing models
  }, [model]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setImageUrl('');

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model, resolution }),
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

  const handleDownload = async () => {
    try {
      const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(imageUrl)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) throw new Error('Failed to download image');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
      setError('Failed to download image. Please try again.');
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
              <div>
                <label htmlFor="resolution" className="block text-sm font-medium text-gray-300 mb-1">Resolution</label>
                <select
                  id="resolution"
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {resolutions.map((res) => (
                    <option key={res.value} value={res.value}>
                      {res.label}
                    </option>
                  ))}
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
            {isLoading ? (
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="loader"></div>
              </div>
            ) : imageUrl ? (
              <div className="space-y-4">
                <img src={imageUrl} alt="Generated image" className="w-full h-auto rounded-lg shadow-lg" />
                <button
                  onClick={handleDownload}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Download Image
                </button>
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Generated image will appear here</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .loader {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}