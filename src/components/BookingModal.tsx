import React, { useState } from 'react';
import { X, Calendar, Users, CreditCard, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    roomType: 'standard',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: 4500 },
    { id: 'deluxe', name: 'Deluxe Room', price: 6800 },
    { id: 'suite', name: 'Executive Suite', price: 9500 },
    { id: 'penthouse', name: 'Penthouse Suite', price: 12000 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate booking completion
      alert('Booking confirmed! You will receive a confirmation email shortly.');
      onClose();
      setStep(1);
    }
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === bookingData.roomType);
    const basePrice = selectedRoom ? selectedRoom.price : 4500;
    const nights = bookingData.checkIn && bookingData.checkOut ? 
      Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 1;
    const subtotal = basePrice * bookingData.rooms * nights;
    const taxes = subtotal * 0.18; // 18% GST
    return { subtotal, taxes, total: subtotal + taxes, nights };
  };

  if (!isOpen) return null;

  const { subtotal, taxes, total, nights } = calculateTotal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Book Your Stay</h2>
            <p className="text-gray-400">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <span className={`text-sm ${step >= 1 ? 'text-blue-400' : 'text-gray-500'}`}>Dates & Rooms</span>
            <span className={`text-sm ${step >= 2 ? 'text-blue-400' : 'text-gray-500'}`}>Guest Details</span>
            <span className={`text-sm ${step >= 3 ? 'text-blue-400' : 'text-gray-500'}`}>Confirmation</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Dates & Rooms */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                    required
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rooms</label>
                  <select
                    name="rooms"
                    value={bookingData.rooms}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Room Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roomTypes.map(room => (
                    <label
                      key={room.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        bookingData.roomType === room.id
                          ? 'border-blue-400 bg-blue-400/10'
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="roomType"
                        value={room.id}
                        checked={bookingData.roomType === room.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-white font-semibold">{room.name}</div>
                      <div className="text-blue-400 font-bold">₹{room.price.toLocaleString('en-IN')}/night</div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Guest Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={bookingData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={bookingData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Special Requests (Optional)</label>
                <textarea
                  name="specialRequests"
                  value={bookingData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Any special requests or preferences..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  Booking Summary
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Guest:</span>
                    <span className="text-white">{bookingData.firstName} {bookingData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white">{bookingData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Phone:</span>
                    <span className="text-white">{bookingData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Check-in:</span>
                    <span className="text-white">{new Date(bookingData.checkIn).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Check-out:</span>
                    <span className="text-white">{new Date(bookingData.checkOut).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nights:</span>
                    <span className="text-white">{nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Room:</span>
                    <span className="text-white">{roomTypes.find(r => r.id === bookingData.roomType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Guests:</span>
                    <span className="text-white">{bookingData.guests}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 text-blue-400 mr-2" />
                  Payment Summary
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal ({nights} nights × {bookingData.rooms} room)</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Taxes & Fees (18% GST)</span>
                    <span>₹{taxes.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t border-slate-600 pt-3">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total Amount</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-300 text-sm">
                  <strong>Payment:</strong> This is a demo booking system. In a real implementation, 
                  secure payment processing would be integrated here.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-slate-700">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className="ml-auto bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {step === 3 ? 'Confirm Booking' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;