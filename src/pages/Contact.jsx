import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98840 60089"],
      bg: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["kmdfoodproducts2023@gmail.com"],
      bg: "from-amber-500 to-orange-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: [
        "No.1/250B, 5th Street, Palaniyappa Nagar",
        "Vanagaram, Chennai – 600095",
      ],
      bg: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon–Sat: 9.00 AM – 6.00 PM"],
      bg: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* HERO */}
      <div className="bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-lg text-amber-100">
            We’re happy to assist you with product inquiries, business
            opportunities, and partnerships.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-12">
        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700">
                Thank you! Your message has been sent successfully.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name *"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email Address *"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />

              <select
                name="subject"
                value={formData.subject}
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select Subject *</option>
                <option value="order">Order / Purchase Enquiry</option>
                <option value="product">Product Information</option>
                <option value="distributor">Distributor / Retail Enquiry</option>
                <option value="export">Export & B2B Enquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              required
              rows="5"
              placeholder="Write your message here..."
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-amber-600 to-emerald-600 text-white rounded-lg font-semibold flex justify-center items-center hover:shadow-lg"
            >
              <Send className="w-5 h-5 mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO + SOCIAL */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.bg} flex items-center justify-center text-white mb-3`}
                >
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg">{info.title}</h3>
                {info.details.map((d, k) => (
                  <p key={k} className="text-gray-600">{d}</p>
                ))}
              </div>
            ))}
          </div>

          {/* SOCIAL LINKS */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

            <div className="flex gap-4">

              <a
                href="https://wa.me/message/WR7DHVRNZT56M1"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 transition"
                title="WhatsApp"
              >
                <MessageCircle />
              </a>

              <a
                href="https://www.linkedin.com/in/mahalakshmi-k-6a152b2b4"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition"
                title="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61550128531703"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition"
                title="Facebook"
              >
                <Facebook />
              </a>

              <a
                href="https://www.instagram.com/kmdfoodproducts"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white hover:scale-110 transition"
                title="Instagram"
              >
                <Instagram />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
