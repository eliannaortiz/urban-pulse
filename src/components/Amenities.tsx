import React from 'react';
import { Wifi, Car, Coffee, Dumbbell, Utensils, Users, Briefcase, Waves } from 'lucide-react';

const Amenities: React.FC = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the property",
      category: "connectivity"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Secure valet parking service available 24/7",
      category: "convenience"
    },
    {
      icon: Coffee,
      title: "Rooftop Bar",
      description: "Panoramic city views with premium cocktails and dining",
      category: "dining"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym with modern equipment",
      category: "wellness"
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Multi-cuisine restaurant with local and international flavors",
      category: "dining"
    },
    {
      icon: Users,
      title: "Business Center",
      description: "Modern co-working spaces and meeting rooms",
      category: "business"
    },
    {
      icon: Briefcase,
      title: "Concierge Service",
      description: "24/7 concierge assistance for all your needs",
      category: "service"
    },
    {
      icon: Waves,
      title: "Spa & Wellness",
      description: "Rejuvenating spa treatments and wellness facilities",
      category: "wellness"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">
            Hotel Amenities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Modern
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {' '}Lifestyle
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience premium amenities designed for the modern traveler. 
            From business facilities to wellness spaces, we have everything you need.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;