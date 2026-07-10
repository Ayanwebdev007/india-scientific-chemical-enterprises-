import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Soil, Bitumen Testing Equipments",
    image: "/images/soil testing.webp",
    slug: "soil-bitumen"
  },
  {
    title: "Cement Concrete & Aggregate Testing",
    image: "/images/Cement Concrete & Aggregate Testing Equipments.webp",
    slug: "cement-concrete"
  },
  {
    title: "Scientific Instruments",
    image: "/images/Scientific Instruments.webp",
    slug: "scientific-instruments"
  },
  {
    title: "Laboratory & Commercial Chemicals",
    image: "/images/Laboratory & Commercial Chemicals.webp",
    slug: "laboratory-chemicals"
  },
  {
    title: "Borosil Glass",
    image: "/images/Borosil Glass.webp",
    slug: "borosil-glass"
  },
  {
    title: "Whatman's Filter Paper etc.",
    image: "/images/Whatman's Filter Paper.webp",
    slug: "filter-papers"
  }
];

const ProductCategories = () => {
  return (
    <section className="pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gray-50 relative overflow-hidden" id="products">
      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-medium tracking-widest text-blue-600 uppercase mb-3">Deals In</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Products</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-64 sm:h-72 lg:h-80"
            >
              <a 
                href={`https://wa.me/919905115966?text=Hello,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(cat.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full h-full rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/10 to-transparent transition-opacity duration-300 group-hover:from-blue-900/90"></div>

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-row justify-between items-end gap-2">
                  <h4 className="text-lg sm:text-2xl font-medium text-white leading-tight max-w-[55%]">
                    {cat.title}
                  </h4>
                  
                  {/* Order Now Button */}
                  <div className="flex items-center flex-shrink-0">
                    <span className="inline-flex items-center bg-blue-600/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg group-hover:bg-blue-500 transition-all duration-300 shadow-md">
                      Order Now
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
