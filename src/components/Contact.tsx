import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Locations",
      details: [
        "Connaught Place, New Delhi",
        "Bandra-Kurla Complex, Mumbai"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 98765 43210",
        "+91 87654 32109"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "reservations@urbanpulse.com",
        "info@urbanpulse.com"
      ]
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: [
        "24/7 Front Desk",
        "Concierge: 6 AM - 12 AM"
      ]
    }
  ];

  const subjects = [
    "General Inquiry",
    "Room Reservation",
    "Event Booking",
    "Dining Reservation",
    "Feedback",
    "Corporate Booking",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Contact
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {' '}Us
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have questions or ready to book your stay? Our dedicated team is here to assist you 
            with all your hospitality needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're planning a business trip, leisure stay, or special event, 
                our team is ready to make your experience exceptional. Reach out to us 
                through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg font-medium transition-colors text-left">
                  📞 Call for Immediate Assistance
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg font-medium transition-colors text-left">
                  💬 Live Chat Support
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg font-medium transition-colors text-left">
                  📧 Email Customer Service
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">UP</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Urban Pulse
                  </h1>
                  <p className="text-xs text-gray-400">HOTEL</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Redefining city hospitality with modern luxury and exceptional service.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>About Us</p>
                <p>Rooms & Suites</p>
                <p>Dining</p>
                <p>Events</p>
                <p>Careers</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-white text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-white text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-white text-xs">i</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Urban Pulse Hotel. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;