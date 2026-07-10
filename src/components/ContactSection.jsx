import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100" id="contact">
      <div className="container mx-auto px-5">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-600">Us</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Map & Info */}
          <div className="flex flex-col h-full space-y-8">
            {/* Google Map */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md border border-gray-100 flex-shrink-0">
              <iframe 
                src="https://maps.google.com/maps?q=Janta%20Market%2C%20Bartand%2C%20Dhanbad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>

            {/* Contact Details Cards */}
            <div className="grid sm:grid-cols-2 gap-4 flex-grow">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                <p className="text-gray-600 text-sm">8/A, First Floor, Janta Market, Near Bus Stand, Bartand, Dhanbad</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Phone</h4>
                  </div>
                  <p className="text-gray-600 text-sm flex flex-col gap-1">
                    <span>+91 98355 31699</span>
                    <span>+91 99051 15966 <span className="text-green-600 font-semibold text-xs ml-1">(WhatsApp)</span></span>
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Email</h4>
                  </div>
                  <p className="text-gray-600 text-sm">sales@isce-india.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form className="space-y-5 flex-grow flex flex-col">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" required />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" />
              </div>
              
              <div className="space-y-1.5 flex-grow flex flex-col">
                <label className="text-sm font-medium text-gray-700">Your Message</label>
                <textarea placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none flex-grow min-h-[120px] resize-none" required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
