import React, { useState } from 'react';
import Button from '../SHARED/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-textSecondary text-center mb-8">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-textPrimary mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-textSecondary/20 rounded-md px-4 py-2 text-textPrimary focus:border-secondary focus:outline-none"
                required
              />
            </div>
            <div>
              <label 
                htmlFor="email" 
                className="block text-textPrimary mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-textSecondary/20 rounded-md px-4 py-2 text-textPrimary focus:border-secondary focus:outline-none"
                required
              />
            </div>
            <div>
              <label 
                htmlFor="message" 
                className="block text-textPrimary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-white/5 border border-textSecondary/20 rounded-md px-4 py-2 text-textPrimary focus:border-secondary focus:outline-none"
                required
              />
            </div>
            <Button type="submit" primary className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;