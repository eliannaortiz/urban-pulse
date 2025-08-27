import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      category: "rooms",
      title: "Luxury Suite",
      description: "Spacious suite with city views"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      category: "dining",
      title: "Rooftop Restaurant",
      description: "Fine dining with panoramic views"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      category: "rooms",
      title: "Executive Room",
      description: "Modern comfort and elegance"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      category: "amenities",
      title: "Lobby Area",
      description: "Contemporary design and ambiance"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      category: "rooms",
      title: "Penthouse Suite",
      description: "Ultimate luxury experience"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      category: "dining",
      title: "Restaurant Interior",
      description: "Elegant dining atmosphere"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      category: "amenities",
      title: "Business Center",
      description: "Modern workspace facilities"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg",
      category: "amenities",
      title: "Fitness Center",
      description: "State-of-the-art gym equipment"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'dining', name: 'Dining' },
    { id: 'amenities', name: 'Amenities' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">
            Visual Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Photo
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {' '}Gallery
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our stunning spaces through our curated photo gallery. 
            From luxurious rooms to world-class amenities, see what makes Urban Pulse special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold mb-1">{image.title}</h4>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Experience Urban Pulse</h3>
            <p className="text-gray-300 mb-6">
              Ready to experience luxury and comfort? Book your stay and create your own memories.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Your Stay Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;