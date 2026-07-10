import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Beaker, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [rotationIndex, setRotationIndex] = useState(0);

  const images = [
    { src: '/images/lab_bg.webp', alt: 'School Laboratory', title: 'Laboratory Setup', customClass: 'object-center' },
    { src: '/images/lab_equipment.webp', alt: 'Lab Equipment', title: 'Quality Equipment', customClass: 'object-top' },
    { src: '/images/lab_technician.webp', alt: 'Lab Technician', title: 'Expert Analysis', customClass: 'object-[center_25%]' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Helper to get image based on position offset
  const getImage = (offset) => images[(rotationIndex + offset) % 3];

  return (
    <div className="relative lg:min-h-screen bg-blue-950 flex items-start lg:items-center overflow-hidden">
      {/* Background Image with subtle scale animation */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img 
          src={getImage(0).src} 
          alt="Laboratory Background" 
          className={`w-full h-full object-cover transition-all duration-1000 ${getImage(0).customClass}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-blue-950 via-blue-950/90 to-transparent"></div>
      </motion.div>

      {/* Floating Trust Cards - Desktop */}
      <div className="hidden lg:flex absolute top-12 right-12 z-20 space-x-4">
        {[
          { text: "Since 1985", icon: <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" /> },
          { text: "Trusted Supplier", icon: <ShieldCheck className="w-5 h-5 text-cyan-400 mr-2" /> },
          { text: "Quality Assured", icon: <Beaker className="w-5 h-5 text-cyan-400 mr-2" /> }
        ].map((badge, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
            className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full shadow-xl"
          >
            {badge.icon}
            <span className="font-medium text-sm tracking-wide">{badge.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-5 pt-8 pb-8 lg:pt-20 lg:pb-12 relative z-10">
        
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="lg:hidden flex flex-col">
          


          {/* Mobile Hero Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-56 sm:h-72 mb-7 rounded-2xl overflow-hidden"
          >
            {/* Main large image */}
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={getImage(0).src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                src={getImage(0).src} 
                alt={getImage(0).alt} 
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl ${getImage(0).customClass}`}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent rounded-2xl z-10"></div>
            
            {/* Overlapping small images */}
            <div className="absolute bottom-3 right-3 flex gap-2 z-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-white/30 shadow-xl relative">
                <AnimatePresence mode="popLayout">
                  <motion.img 
                    key={getImage(1).src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={getImage(1).src} 
                    alt={getImage(1).alt} 
                    className={`absolute inset-0 w-full h-full object-cover ${getImage(1).customClass}`} 
                  />
                </AnimatePresence>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-white/30 shadow-xl relative">
                <AnimatePresence mode="popLayout">
                  <motion.img 
                    key={getImage(2).src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={getImage(2).src} 
                    alt={getImage(2).alt} 
                    className={`absolute inset-0 w-full h-full object-cover ${getImage(2).customClass}`} 
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Floating 45+ badge on image */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              className="absolute top-3 left-3 bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/30 z-20"
            >
              <div className="text-2xl font-black leading-none">45+</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider opacity-90">Years</div>
            </motion.div>
          </motion.div>

          {/* Mobile Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4"
          >
            Best Dealer in Jharkhand <br />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">45+ Years</span> of Experience
          </motion.h1>
          
          {/* Mobile Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-blue-100/70 mb-6 leading-relaxed font-light"
          >
            Your trusted partner for premium laboratory instruments, industrial chemicals, and engineering testing equipment.
          </motion.p>

          {/* Mobile Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-2 mb-7 flex-wrap"
          >
            {[
              { text: "Trusted Supplier", icon: <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 mr-1" /> },
              { text: "Quality Assured", icon: <Beaker className="w-3.5 h-3.5 text-cyan-400 mr-1" /> }
            ].map((badge, idx) => (
              <div 
                key={idx}
                className="flex items-center bg-white/8 border border-white/15 text-white/80 px-3 py-1.5 rounded-full"
              >
                {badge.icon}
                <span className="font-medium text-xs">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Mobile Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-cyan-500/20 flex items-center justify-center group"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#products" 
              className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-base flex items-center justify-center"
            >
              Explore Products
            </a>
          </motion.div>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >


            {/* Big 45+ highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="flex items-end gap-4 mb-6"
            >
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-transparent bg-clip-text text-8xl font-black leading-none">
                45+
              </div>
              <div className="text-blue-200/80 text-lg font-medium pb-2 leading-snug">
                Years of Trusted<br />Excellence
              </div>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Best Dealer in Jharkhand <br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Unmatched Experience</span>
            </h1>
            
            <p className="text-xl text-blue-100/80 mb-10 leading-relaxed font-light">
              Your trusted partner for premium laboratory instruments, industrial chemicals, and engineering testing equipment since 1985.
            </p>
            
            <div className="flex space-x-6">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#products" 
                className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Explore Products
              </a>
            </div>
          </motion.div>

          {/* Right Side Premium Collage - Rotating Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[600px] w-full"
          >
            {/* Center Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 z-20 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={getImage(0).src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  src={getImage(0).src} 
                  alt={getImage(0).alt} 
                  className={`absolute inset-0 w-full h-full object-cover ${getImage(0).customClass}`} 
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold z-20 pointer-events-none">{getImage(0).title}</div>
            </div>

            {/* Top Left Image */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-48 h-48 z-10 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl backdrop-blur-md relative"
            >
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={getImage(1).src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  src={getImage(1).src} 
                  alt={getImage(1).alt} 
                  className={`absolute inset-0 w-full h-full object-cover opacity-90 ${getImage(1).customClass}`} 
                />
              </AnimatePresence>
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-10 w-56 h-56 z-30 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-md relative"
            >
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={getImage(2).src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  src={getImage(2).src} 
                  alt={getImage(2).alt} 
                  className={`absolute inset-0 w-full h-full object-cover opacity-90 ${getImage(2).customClass}`} 
                />
              </AnimatePresence>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 left-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
