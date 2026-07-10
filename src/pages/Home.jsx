import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import ProductCategories from '../components/ProductCategories';
import ContactSection from '../components/ContactSection';
import IndustriesSection from '../components/IndustriesSection';
import Section from '../components/Section';
import { 
  Microscope, Pickaxe, TestTube, FlaskConical, Filter, Droplet, 
  Building2, GraduationCap, HardHat, Factory, Stethoscope, 
  CheckCircle, Truck, DollarSign, Award, Clock, Users, ShieldCheck, ThumbsUp,
  ChevronDown, Star
} from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustSection />
      <ProductCategories />
      <IndustriesSection />

      {/* Testimonials (Google Reviews style) */}
      <Section title="What Our Clients Say" bg="white">
        <div className="flex items-center justify-center mb-8 gap-2">
          <div className="font-semibold text-gray-800 text-lg">Excellent</div>
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
          </div>
          <div className="text-gray-500 text-sm ml-2">Based on 150+ reviews</div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-50 relative flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              {/* Header: Avatar, Name, Google Logo */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 leading-tight">{test.author}</h5>
                    <p className="text-xs text-gray-500 mt-0.5">{test.org}</p>
                  </div>
                </div>
                {/* Google Logo SVG */}
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-3 text-yellow-400">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {test.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <ContactSection />
    </div>
  );
};

export default Home;

// Data
const testimonials = [
  {
    text: "Excellent supplier with genuine products. Their scientific instruments have always met our stringent quality requirements.",
    author: "Dr. Rajesh Kumar",
    org: "Research Institute"
  },
  {
    text: "Fast delivery and reasonable pricing. We procure all our civil engineering testing equipment from ISCE.",
    author: "Sanjay Singh",
    org: "Infrastructure Contractors"
  },
  {
    text: "Highly recommended for laboratory equipment and chemicals. Their team provides excellent support.",
    author: "Prof. Anita Sharma",
    org: "Engineering College"
  }
];

