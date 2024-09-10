'use client';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from 'react';

const pricingData = [
  {
    plan: "Starter",
    price: { annual: 15, monthly: 20 },
    features: [
      "Basic AI insights",
      "Email support",
      "Integration with Slack & MS Teams"
    ]
  },
  {
    plan: "Pro",
    price: { annual: 30, monthly: 40 },
    features: [
      "Advanced AI insights",
      "Priority support",
      "Custom integrations",
      "Team performance analytics"
    ]
  },
  {
    plan: "Enterprise",
    price: { annual: "Custom", monthly: "Custom" },
    features: [
      "Advanced AI insights",
      "24/7 dedicated support",
      "Custom features",
      "On-premise deployment options"
    ]
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-green-400">Simple, Transparent Pricing</h1>
            
            {/* Pricing Toggle */}
            <div className="flex justify-center items-center mb-12">
              <span className={`mr-3 ${isAnnual ? 'text-green-400' : 'text-gray-400'}`}>Annual</span>
              <div
                className="relative w-14 h-8 bg-gray-700 rounded-full cursor-pointer flex items-center"
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <div
                  className={`absolute w-6 h-6 bg-green-400 rounded-full transition-transform duration-300 ease-in-out ${
                    isAnnual ? 'transform translate-x-1' : 'transform translate-x-7'
                  }`}
                ></div>
              </div>
              <span className={`ml-3 ${!isAnnual ? 'text-green-400' : 'text-gray-400'}`}>Monthly</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingData.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg shadow-md ${plan.plan === "Pro" ? 'border-2 border-green-500' : 'border-purple-500'}`}>
                  <h2 className={`text-2xl font-bold mb-4 ${plan.plan === "Pro" ? 'text-green-400' : 'text-purple-400'}`}>{plan.plan}</h2>
                  <p className="text-4xl font-bold mb-4 text-white">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                    {plan.price.annual !== "Custom" && <span className="text-xl font-normal text-gray-400">/mo/user</span>}
                  </p>
                  <ul className="mb-8 text-gray-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">✓ {feature}</li>
                    ))}
                  </ul>
                  <a href="#" className={`block text-center ${plan.plan === "Pro" ? 'bg-green-500' : 'bg-purple-500'} text-white py-2 px-4 rounded ${plan.plan === "Pro" ? 'hover:bg-green-600' : 'hover:bg-purple-600'} transition-colors`}>
                    {plan.plan === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}