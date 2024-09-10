'use client';

import { useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { sendEmail } from '../actions/sendEmail';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    let errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitStatus('Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus(`There was an error sending your message: ${result.error}`);
      }
    } catch (error: any) {
      setSubmitStatus(`There was an error sending your message: ${error.message}`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-400">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-300 mb-8 text-center">
            Have questions or want to learn more about Asimov AI? We'd love to hear from you!
          </p>

          {submitStatus && (
            <div className={`mb-4 p-2 rounded ${submitStatus.includes('error') ? 'bg-red-500' : 'bg-green-500'}`}>
              {submitStatus}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData['name'] || ''}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-3 py-2 bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              ></textarea>
              {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Other Ways to Reach Us</h2>
            <p className="text-gray-300 mb-2">Email: info@asimov-ai.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-300">Address: 123 AI Street, Tech City, TC 12345</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}