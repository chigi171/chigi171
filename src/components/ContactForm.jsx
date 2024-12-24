import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const callEndpoint = async (company, message, name, email) => {
    const url = 'https://fvm9by.buildship.run/chigi-e644709bc6cf';
    const data = {
      company: company,
      message: message,
      name: name,
      email: email
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await callEndpoint(
        formData.company,
        formData.message,
        formData.name,
        formData.email
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        
        {status && (
          <div className={`mb-6 p-4 rounded ${status.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            />
          </div>
          
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;