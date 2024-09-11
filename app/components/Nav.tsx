import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">Asimov AI</Link>
        <ul className="flex space-x-4">
          <li><Link href="/ai-agents" className="text-gray-300 hover:text-purple-400">AI Agents</Link></li>
          <li><Link href="/pricing" className="text-gray-300 hover:text-purple-400">Pricing</Link></li>
          <li><Link href="/about" className="text-gray-300 hover:text-purple-400">About</Link></li>
          <li><Link href="/contact" className="text-gray-300 hover:text-purple-400">Contact</Link></li>
          <li><Link href="/generate-image" className="text-gray-300 hover:text-purple-400">Generate Image</Link></li>
        </ul>
      </div>
    </nav>
  );
}