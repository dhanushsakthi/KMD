import React from 'react';
import { Award, Users, Leaf, Globe, Clock, Heart, Star, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const StorySection = () => {
  const milestones = [
    { 
      year: "1985", 
      title: "Humble Beginnings", 
      description: "Started as a small family-run health food store in Chennai with 3 products",
      icon: "🏪"
    },
    { 
      year: "1995", 
      title: "First Processing Unit", 
      description: "Established our first dedicated processing unit with modern facilities",
      icon: "🏭"
    },
    { 
      year: "2005", 
      title: "Organic Certification", 
      description: "Received organic certification for all our products from APEDA",
      icon: "🌿"
    },
    { 
      year: "2015", 
      title: "National Expansion", 
      description: "Expanded distribution network to serve customers across India",
      icon: "🗺️"
    },
    { 
      year: "2023", 
      title: "Digital Transformation", 
      description: "Launched e-commerce platform reaching global customers",
      icon: "💻"
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Love & Care",
      description: "Every product is made with the same love as home-cooked food",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality First",
      description: "Rigorous 7-step quality check for every batch",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Direct partnerships with 250+ farming families",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Eco-friendly packaging and zero-waste processing",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "No artificial additives, ever. Pure & honest ingredients",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tradition",
      description: "Preserving authentic recipes passed through generations",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "38+", label: "Years of Excellence", icon: "⏳" },
    { number: "14", label: "Premium Products", icon: "🥘" },
    { number: "250+", label: "Farming Families", icon: "👨‍🌾" },
    { number: "50,000+", label: "Happy Customers", icon: "😊" },
    { number: "100%", label: "Natural Ingredients", icon: "🌱" },
    { number: "24/7", label: "Customer Support", icon: "📞" }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-amber-500/5 rounded-full blur-3xl"></div>
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d97706' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200 rounded-full px-6 py-3 text-amber-700 font-semibold text-sm mb-6"
          >
            <Star className="w-4 h-4 fill-amber-500" />
            Our Heritage Journey
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Crafting Health with
            <span className="block mt-3">
              <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-600 bg-clip-text text-transparent">
                Heart & Heritage
              </span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            For three generations, we've been on a mission to bring authentic, 
            nourishing health foods to every Indian household, blending traditional 
            wisdom with modern nutrition science.
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500/20 via-amber-500/40 to-emerald-500/20 hidden lg:block"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-24 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 lg:px-12 mb-8 lg:mb-0">
                  <div className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{milestone.icon}</div>
                      <div>
                        <div className="text-sm font-semibold text-amber-600 mb-1">{milestone.year}</div>
                        <h3 className="text-2xl font-display font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white">
                    {milestone.year.slice(2)}
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-amber-500 animate-ping opacity-20"></div>
                </div>
                
                <div className="lg:w-1/2 lg:px-12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-10 shadow-xl border border-amber-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900">Our Mission</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To empower every Indian family with access to pure, authentic, and 
              nourishing health foods that bridge the gap between traditional wisdom 
              and modern nutritional needs.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700">Preserve and promote traditional Indian food wisdom</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700">Make premium health foods accessible to all</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700">Support sustainable farming practices</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-10 shadow-xl border border-emerald-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900">Our Vision</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To become India's most trusted health food brand, revolutionizing 
              nutrition through authentic recipes while creating positive impact 
              across farming communities.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                </div>
                <span className="text-gray-700">Reach 1 million households by 2030</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                </div>
                <span className="text-gray-700">Empower 1000+ farming families</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                </div>
                <span className="text-gray-700">Zero carbon footprint by 2025</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients 
              to serving our customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-amber-600 to-emerald-600 rounded-3xl p-10 lg:p-16 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-amber-100 text-lg max-w-2xl mx-auto">
              Years of dedication translated into meaningful numbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:text-amber-200 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-amber-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Our Quality Promise
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "No artificial preservatives",
                  "No added colors",
                  "No refined sugars",
                  "100% vegetarian",
                  "Gluten-free options",
                  "Chemical-free processing"
                ].map((promise, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-8 text-center border border-amber-200">
                <Award className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Certified Excellence</h4>
                <p className="text-gray-600 text-sm">
                  ISO 22000:2018 Certified • FSSAI Approved • Organic Certified
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-emerald-400/10 rounded-full blur-xl hidden lg:block"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-amber-400/10 rounded-full blur-xl hidden lg:block"
      ></motion.div>
    </section>
  );
};

// Add missing Check icon component
const Check = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

export default StorySection;