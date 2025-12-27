import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["orders@kmdfoods.com", "support@kmdfoods.com"],
      bgColor: "from-spice-primary to-red-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Spice Street", "Chennai, Tamil Nadu 600001"],
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
      bgColor: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-spice-dark to-spice-primary text-white py-20 overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Have questions about our spices? Need cooking advice? We're here to help!
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-spice-secondary rounded-full opacity-10 -translate-x-32 translate-y-32"></div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-playfair font-bold mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-primary focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="recipe">Recipe Help</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-primary focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-8">Get in Touch</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.bgColor} flex items-center justify-center text-white mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="h-64 bg-gradient-to-br from-spice-light to-spice-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-spice-primary mx-auto mb-4" />
                  <p className="font-semibold">Chennai Headquarters</p>
                  <p className="text-gray-600 text-sm">123 Spice Street, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-gradient-to-r from-spice-primary to-spice-secondary rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">Common Questions</h3>
              <div className="space-y-4">
                {[
                  "How long does shipping take?",
                  "Are your spices organic certified?",
                  "Do you offer wholesale pricing?",
                  "Can I return opened products?"
                ].map((question, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                    <span>{question}</span>
                    <span className="text-lg">→</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                View All FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-playfair font-bold mb-6">Connect with us on Social Media</h3>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
              { name: 'Facebook', color: 'bg-gradient-to-r from-blue-600 to-blue-400' },
              { name: 'Twitter', color: 'bg-gradient-to-r from-sky-500 to-blue-500' },
              { name: 'YouTube', color: 'bg-gradient-to-r from-red-600 to-red-500' },
              { name: 'Pinterest', color: 'bg-gradient-to-r from-red-500 to-pink-500' }
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`w-14 h-14 ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                title={social.name}
              >
                <span className="font-semibold">{social.name[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;