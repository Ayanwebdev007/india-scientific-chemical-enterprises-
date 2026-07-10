import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Package, Users, Building2 } from 'lucide-react';

const AnimatedCounter = ({ target, suffix = '+', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target);
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const stats = [
  {
    number: '45',
    label: 'Years Experience',
    icon: <Clock className="w-5 h-5" />,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    number: '5000',
    label: 'Products Available',
    icon: <Package className="w-5 h-5" />,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  },
  {
    number: '1000',
    label: 'Satisfied Clients',
    icon: <Users className="w-5 h-5" />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    number: '100',
    label: 'Brands & Manufacturers',
    icon: <Building2 className="w-5 h-5" />,
    color: 'text-sky-600',
    bg: 'bg-sky-50'
  }
];

const TrustSection = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-900/5 aspect-[4/3] group">
              <img 
                src="/images/trust_image.webp" 
                alt="Professional Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Stats Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start"
          >
            <div className="grid grid-cols-2 gap-6 sm:gap-12 lg:gap-16 w-full">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${stat.bg} ${stat.color} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
                    <AnimatedCounter target={stat.number} />
                  </div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
