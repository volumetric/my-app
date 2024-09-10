import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-green-500 py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Asimov AI</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            A socially intelligent Team assistant and coach for high performing teams
          </p>
          <div className="flex gap-4 justify-center">
            <a
              className="rounded-full bg-white text-purple-600 px-6 py-3 font-semibold hover:bg-gray-200 transition-colors"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Slack
            </a>
            <a
              className="rounded-full bg-green-500 text-white px-6 py-3 font-semibold hover:bg-green-600 transition-colors"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to MS Teams
            </a>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6 text-purple-400">Trusted by leading companies</h2>
          <div className="flex justify-around items-center">
            {/* Replace with actual brand logos */}
            <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
            <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
            <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
            <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
            <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">AI-Powered Insights</h3>
              <p className="text-gray-300">Get real-time insights into team dynamics and performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Personalized Coaching</h3>
              <p className="text-gray-300">Receive tailored advice to improve team collaboration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Seamless Integration</h3>
              <p className="text-gray-300">Easily integrate with your existing workflow tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-200">"Asimov AI has transformed our team's productivity and collaboration."</p>
              <p className="font-semibold text-purple-300">- Jane Doe, CEO of TechCorp</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-200">"The insights provided by Asimov AI are invaluable for our team's growth."</p>
              <p className="font-semibold text-purple-300">- John Smith, CTO of InnovateCo</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">How Asimov AI Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Connect</h3>
              <p className="text-gray-300">Integrate Asimov AI with your team's communication platforms.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Analyze</h3>
              <p className="text-gray-300">Our AI analyzes team interactions and performance metrics.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Improve</h3>
              <p className="text-gray-300">Receive personalized insights and coaching to enhance team dynamics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">How does Asimov AI protect our data?</h3>
              <p className="text-gray-300">We use industry-standard encryption and security practices to ensure your data is always protected. Our systems are regularly audited for compliance with data protection regulations.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Can Asimov AI integrate with our existing tools?</h3>
              <p className="text-gray-300">Yes, Asimov AI is designed to seamlessly integrate with popular communication and project management tools. We offer native integrations for Slack, MS Teams, and many other platforms.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">How long does it take to see results?</h3>
              <p className="text-gray-300">Most teams start seeing valuable insights within the first week of use. However, the AI's understanding of your team dynamics improves over time, providing increasingly accurate and helpful insights.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Is there a free trial available?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for all new users. This allows you to experience the full capabilities of Asimov AI and see how it can benefit your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-green-500">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your team?</h2>
          <p className="mb-8 text-gray-100">Get started with Asimov AI today and unlock your team's full potential.</p>
          <a
            className="rounded-full bg-white text-purple-600 px-8 py-3 font-semibold hover:bg-gray-200 transition-colors"
            href="#"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
