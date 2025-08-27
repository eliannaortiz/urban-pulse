import React from 'react';
import { Building2, MapPin, Clock, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Building2,
      title: "Modern Architecture",
      description: "Contemporary design with cutting-edge amenities and sustainable practices."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategic location in business districts with easy access to major attractions."
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock concierge and room service for your convenience."
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "Recognized excellence in hospitality and guest satisfaction."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">
                  About Urban Pulse
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Redefining
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {' '}City Hospitality
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Urban Pulse Hotel stands as a beacon of modern luxury in India's most dynamic cities. 
                We blend contemporary design with warm Indian hospitality to create unforgettable 
                experiences for business travelers and city explorers alike.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Located in the heart of Delhi's Connaught Place and Mumbai's Bandra-Kurla Complex, 
                our properties offer unmatched access to business centers, cultural attractions, and 
                vibrant nightlife while providing a serene retreat from the urban pulse.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">145</div>
                <div className="text-gray-400 text-sm">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">2</div>
                <div className="text-gray-400 text-sm">City Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.8</div>
                <div className="text-gray-400 text-sm">Guest Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-900/80">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/20">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed">
              "We don't just provide accommodation; we craft experiences that resonate with the 
              dynamic spirit of modern India."
            </blockquote>
            <cite className="block mt-6 text-blue-400 font-semibold">
              — Rajesh Kumar, General Manager
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;