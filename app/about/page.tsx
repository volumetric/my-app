import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-400">About Asimov AI</h1>
        
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At Asimov AI, we're on a mission to revolutionize team dynamics and productivity through cutting-edge artificial intelligence. We believe that every team has the potential for greatness, and our goal is to unlock that potential.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2023 by a team of AI researchers and organizational psychologists, Asimov AI was born from the idea that AI could do more than just automate tasks—it could actively improve how teams work together.
            </p>
            <p className="text-gray-300 mb-4">
              Named after the visionary science fiction author Isaac Asimov, our company embodies the spirit of innovation and the responsible use of technology to benefit humanity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Team</h2>
            <p className="text-gray-300 mb-4">
              We're a diverse group of AI engineers, data scientists, UX designers, and business strategists. United by our passion for technology and team dynamics, we work tirelessly to create an AI assistant that understands the nuances of human interaction and can provide actionable insights to improve team performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Values</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li className="mb-2">Innovation: We're always pushing the boundaries of what's possible with AI.</li>
              <li className="mb-2">Integrity: We handle your data with the utmost care and respect.</li>
              <li className="mb-2">Empowerment: We believe in giving teams the tools they need to excel.</li>
              <li className="mb-2">Continuous Improvement: Like our AI, we're always learning and getting better.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}