import React from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent z-10"></div>
        <div className="w-full h-full bg-slate-800">
          {/* Placeholder for video - using animated gradient */}
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 relative">
            {/* Animated city skyline silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-900 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-slate-900 opacity-80"></div>
              <div className="absolute bottom-8 left-4 w-12 h-24 bg-slate-700 rounded-t"></div>
              <div className="absolute bottom-8 left-20 w-8 h-32 bg-slate-600 rounded-t"></div>
              <div className="absolute bottom-8 left-32 w-16 h-20 bg-slate-700 rounded-t"></div>
              <div className="absolute bottom-8 left-52 w-10 h-28 bg-slate-600 rounded-t"></div>
              <div className="absolute bottom-8 right-4 w-14 h-36 bg-slate-700 rounded-t"></div>
              <div className="absolute bottom-8 right-24 w-12 h-24 bg-slate-600 rounded-t"></div>
              <div className="absolute bottom-8 right-40 w-8 h-32 bg-slate-700 rounded-t"></div>
            </div>
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headlines */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">Luxury City Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Urban
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Pulse
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where modern luxury meets city energy. Experience premium hospitality 
              in the heart of India's business capitals.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-semibold">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">50K+ Happy Guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-semibold">4.8/5 Rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onBookClick}
              className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#rooms');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Explore Rooms
            </button>
          </div>

          {/* Pricing Preview */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-md mx-auto">
            <p className="text-gray-300 text-sm mb-2">Starting from</p>
            <p className="text-3xl font-bold text-white">
              ₹4,500 <span className="text-lg font-normal text-gray-300">/night</span>
            </p>
            <p className="text-blue-300 text-sm">Premium city center location</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;