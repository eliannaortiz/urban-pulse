import React from 'react';
import { Utensils, Coffee, Wine, Clock, Star, ChefHat } from 'lucide-react';

const Dining: React.FC = () => {
  const restaurants = [
    {
      name: "Skyline Rooftop",
      type: "Rooftop Bar & Grill",
      cuisine: "International",
      timing: "6:00 PM - 2:00 AM",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      description: "Panoramic city views with premium cocktails and grilled specialties",
      specialties: ["Craft Cocktails", "BBQ Grill", "City Views", "Live Music"],
      priceRange: "₹2,500 - ₹4,000"
    },
    {
      name: "Spice Route",
      type: "Fine Dining Restaurant",
      cuisine: "Indian & Asian",
      timing: "7:00 AM - 11:00 PM",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      description: "Authentic Indian flavors with contemporary presentation",
      specialties: ["Regional Indian", "Pan-Asian", "Vegetarian", "Chef's Special"],
      priceRange: "₹1,800 - ₹3,500"
    },
    {
      name: "Urban Café",
      type: "All-Day Dining",
      cuisine: "Continental & Café",
      timing: "6:00 AM - 12:00 AM",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      description: "Casual dining with international favorites and fresh coffee",
      specialties: ["Breakfast", "Coffee", "Sandwiches", "Pastries"],
      priceRange: "₹800 - ₹2,200"
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Award-winning culinary team with international experience"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Fresh, locally sourced ingredients and premium imports"
    },
    {
      icon: Wine,
      title: "Curated Bar",
      description: "Extensive wine collection and signature cocktails"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Room service and café available round the clock"
    }
  ];

  return (
    <section id="dining" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">
            Culinary Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Dining &
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {' '}Experiences
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Savor exceptional culinary experiences from our rooftop bar to fine dining restaurant. 
            Each venue offers a unique atmosphere and carefully crafted menu.
          </p>
        </div>

        {/* Restaurants */}
        <div className="space-y-12 mb-16">
          {restaurants.map((restaurant, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-white text-sm font-semibold">{restaurant.priceRange}</div>
                  <div className="text-gray-300 text-xs">per person</div>
                </div>

                {/* Timing */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
                  <div className="flex items-center text-white">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{restaurant.timing}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Utensils className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-sm">{restaurant.type}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{restaurant.name}</h3>
                  <p className="text-gray-400 text-lg">{restaurant.cuisine}</p>
                </div>

                <p className="text-gray-300 leading-relaxed">{restaurant.description}</p>

                {/* Specialties */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Specialties</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {restaurant.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Make Reservation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Special Dining Packages</h3>
            <p className="text-gray-300 mb-6">
              Enjoy exclusive dining experiences with our specially curated packages
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Romantic Dinner</h4>
                <p className="text-gray-400 text-sm mb-3">Private rooftop dining for two</p>
                <p className="text-blue-400 font-bold">₹8,500 for 2</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Business Lunch</h4>
                <p className="text-gray-400 text-sm mb-3">Executive dining with meeting space</p>
                <p className="text-blue-400 font-bold">₹2,200 per person</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Weekend Brunch</h4>
                <p className="text-gray-400 text-sm mb-3">All-you-can-eat weekend special</p>
                <p className="text-blue-400 font-bold">₹1,800 per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;