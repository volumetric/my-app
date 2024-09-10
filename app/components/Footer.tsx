import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 flex flex-col items-center space-y-4">
      <div className="flex justify-center space-x-6">
        <Link href="/privacy" className="text-gray-300 hover:text-purple-400">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-gray-300 hover:text-purple-400">
          Terms of Service
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-purple-400">
          Contact Us
        </Link>
      </div>
      <div className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Tars Inc. All rights reserved.
      </div>
    </footer>
  );
}