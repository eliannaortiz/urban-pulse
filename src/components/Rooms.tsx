import React, { useState } from 'react';
import { Bed, Users, Wifi, Car, Coffee, ArrowRight } from 'lucide-react';

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState(0);

  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: 4500,
      originalPrice: 5200,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      size: "280 sq ft",
      occupancy: "2 Adults",
      amenities: ["Free WiFi", "AC", "Mini Bar", "Room Service"],
      features: [
        "City view from large windows",
        "Modern workspace with ergonomic chair",
        "Premium bedding and pillows",
        "Complimentary breakfast",
        "24/7 room service"
      ]
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 6800,
      originalPrice: 7500,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      size: "350 sq ft",
      occupancy: "2 Adults + 1 Child",
      amenities: ["Free WiFi", "AC", "Mini Bar", "Room Service", "Balcony"],
      features: [
        "Partial city skyline view",
        "Separate seating area",
        "Premium bathroom amenities",
        "Complimentary breakfast & evening tea",
        "Late checkout until 2 PM"
      ]
    },
    {
      id: 3,
      name: "Executive Suite",
      price: 9500,
      originalPrice: 11000,
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      size: "500 sq ft",
      occupancy: "3 Adults",
      amenities: ["Free WiFi", "AC", "Mini Bar", "Room Service", "Living Area"],
      features: [
        "Panoramic city views",
        "Separate living and sleeping areas",
        "Premium dining area for 4",
        "All meals included",
        "Airport pickup & drop"
      ]
    },
    {
      id: 4,
      name: "Penthouse Suite",
      price: 12000,
      originalPrice: 14500,
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      size: "800 sq ft",
      occupancy: "4 Adults",
      amenities: ["Free WiFi", "AC", "Mini Bar", "Room Service", "Terrace", "Jacuzzi"],
      features: [
        "360-degree city views from private terrace",
        "Master bedroom with walk-in closet",
        "Premium dining area and kitchen access",
        "All-inclusive package with meals",
        "Dedicated concierge service"
      ]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">
            Accommodation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Rooms & 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {' '}Suites
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose from our collection of thoughtfully designed rooms and suites, 
            each crafted to provide the perfect blend of comfort, luxury, and modern amenities.
          </p>
        </div>

        {/* Room Selector */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedRoom === index
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Selected Room Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Room Image */}
          <div className="relative group">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src={rooms[selectedRoom].image}
                alt={rooms[selectedRoom].name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-gray-400 text-sm line-through">
                ₹{rooms[selectedRoom].originalPrice.toLocaleString('en-IN')}
              </div>
              <div className="text-white text-xl font-bold">
                ₹{rooms[selectedRoom].price.toLocaleString('en-IN')}
              </div>
              <div className="text-gray-300 text-xs">per night</div>
            </div>

            {/* Quick Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5" />
                    <span className="text-sm">{rooms[selectedRoom].size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">{rooms[selectedRoom].occupancy}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Room Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {rooms[selectedRoom].name}
              </h3>
              <p className="text-gray-400">
                Experience comfort and luxury in our thoughtfully designed {rooms[selectedRoom].name.toLowerCase()}.
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Room Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {rooms[selectedRoom].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Special Features</h4>
              <div className="space-y-2">
                {rooms[selectedRoom].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book {rooms[selectedRoom].name} - ₹{rooms[selectedRoom].price.toLocaleString('en-IN')}/night
              </button>
            </div>
          </div>
        </div>

        {/* All Rooms Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">All Rooms Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-slate-900/80 rounded-lg px-2 py-1">
                    <span className="text-white text-sm font-semibold">
                      ₹{room.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">{room.name}</h4>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>{room.size}</span>
                    <span>{room.occupancy}</span>
                  </div>
                  <button
                    onClick={() => setSelectedRoom(index)}
                    className="w-full mt-3 bg-slate-700 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;