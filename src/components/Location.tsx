import React from 'react';
import { MapPin, Clock, Plane, Train, Car, Building } from 'lucide-react';

const Location: React.FC = () => {
  const locations = [
    {
      city: "New Delhi",
      address: "Connaught Place, Central Delhi",
      landmarks: [
        { name: "India Gate", distance: "2.5 km", time: "8 min" },
        { name: "Red Fort", distance: "3.2 km", time: "12 min" },
        { name: "Parliament House", distance: "1.8 km", time: "6 min" },
        { name: "Rajiv Chowk Metro", distance: "0.3 km", time: "3 min walk" }
      ]
    },
    {
      city: "Mumbai",
      address: "Bandra-Kurla Complex, Mumbai",
      landmarks: [
        { name: "BKC Business District", distance: "0.5 km", time: "5 min walk" },
        { name: "Mumbai Airport", distance: "8.5 km", time: "25 min" },
        { name: "Bandra Station", distance: "2.1 km", time: "8 min" },
        { name: "Linking Road", distance: "3.5 km", time: "15 min" }
      ]
    }
  ];

  const transportOptions = [
    {
      icon: Plane,
      title: "Airport Transfer",
      description: "Complimentary pickup from major airports",
      time: "20-30 min"
    },
    {
      icon: Train,
      title: "Metro Access",
      description: "Walking distance to metro stations",
      time: "2-5 min walk"
    },
    {
      icon: Car,
      title: "Taxi Services",
      description: "24/7 taxi and ride-sharing availability",
      time: "On demand"
    },
    {
      icon: Building,
      title: "Business Districts",
      description: "Prime location near major business hubs",
      time: "5-10 min"
    }
  ];

  return (
    <section id="location" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">
            Prime Location
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Heart of the
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {' '}City
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Strategically located in India's business capitals, offering unmatched 
            access to corporate districts, cultural attractions, and transportation hubs.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{location.city}</h3>
                  <p className="text-gray-400">{location.address}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Nearby Landmarks</h4>
                {location.landmarks.map((landmark, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-gray-300">{landmark.name}</span>
                    <div className="text-right">
                      <div className="text-blue-400 font-semibold">{landmark.distance}</div>
                      <div className="text-gray-500 text-sm">{landmark.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transport Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Transportation & Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{option.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{option.description}</p>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {option.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Interactive Location Map</h3>
          <div className="aspect-w-16 aspect-h-9 bg-slate-900 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Interactive Map Integration</p>
              <p className="text-gray-500 text-sm">Google Maps or similar service would be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;