"use client";

import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);

      if (response.data.success) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Form error:', error);
      alert('An error occurred. Please try again.');
    }
  };


  return (
    <div className="max-w-2xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded w-full"
        >
          Send Message
        </button>
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
