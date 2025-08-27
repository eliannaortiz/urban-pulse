import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Dining from './components/Dining';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      <Navigation onBookClick={() => setIsBookingModalOpen(true)} />
      <Hero onBookClick={() => setIsBookingModalOpen(true)} />
      <About />
      <Rooms />
      <Amenities />
      <Location />
      <Dining />
      <Gallery />
      <Contact />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}

export default App;