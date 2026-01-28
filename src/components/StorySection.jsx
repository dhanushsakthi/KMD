import React from 'react';
import { Award, Globe, Shield, Users, Clock, Star } from 'lucide-react';

const StorySection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-red-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-red-700">OUR STORY</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About KMD Foods
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Story */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Exporting Indian Goodness
              </h3>
              <div className="space-y-6">
                <p class="text-gray-700 leading-relaxed">
  KMD Foods began as a small family-run initiative with a passion for bringing authentic Indian flavors to customers while preserving traditional values and quality craftsmanship.
</p>

<p class="text-gray-700 leading-relaxed">
  Over time, the brand has grown through dedication, trust, and consistency, remaining focused on offering thoughtfully prepared products made with care and responsibility.
</p>

<p class="text-gray-700 leading-relaxed">
  Every product is crafted using time-honored methods supported by modern technology, undergoing strict quality checks to ensure freshness, purity, and authenticity in every batch.
</p>

              </div>
            </div>
          </div>
          
          {/* Right Column - Values */}
          <div className="space-y-6">
            {[
              {
                icon: Globe,
                title: 'Global Excellence',
                description: 'Exporting premium quality to 50+ countries worldwide',
                color: 'blue'
              },
              {
                icon: Shield,
                title: 'Quality Certified',
                description: 'ISO, FSSAI, and international certifications',
                color: 'red'
              },
              {
                icon: Users,
                title: 'Customer Trust',
                description: 'Trusted by thousands of customers globally',
                color: 'yellow'
              },
              {
                icon: Clock,
                title: 'Timely Delivery',
                description: 'Efficient logistics for on-time deliveries',
                color: 'green'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-lg flex-shrink-0`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Awards & Recognition
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized globally
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                award: 'Export Excellence Award 2023',
                organization: 'Government of India',
                color: 'blue'
              },
              {
                award: 'Best Food Exporter 2022',
                organization: 'Export Promotion Council',
                color: 'red'
              },
              {
                award: 'Quality Excellence Award 2021',
                organization: 'Food Safety Authority',
                color: 'yellow'
              }
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${award.color}-500 to-${award.color}-600 rounded-xl mb-6 mx-auto`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{award.award}</h4>
                <p className="text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default StorySection;