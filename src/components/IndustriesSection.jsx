import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Microscope, HardHat, Landmark, 
  Stethoscope, Pill, Pickaxe, Factory, 
  ShieldCheck, GraduationCap 
} from 'lucide-react';

const industries = [
  { name: "Education", icon: <BookOpen strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Research Laboratories", icon: <Microscope strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Construction Industry", icon: <HardHat strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Government Departments", icon: <Landmark strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Hospitals", icon: <Stethoscope strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Pharmaceutical Industry", icon: <Pill strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Mining Industry", icon: <Pickaxe strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Infrastructure Companies", icon: <Factory strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Quality Control Labs", icon: <ShieldCheck strokeWidth={1.5} className="w-8 h-8" /> },
  { name: "Engineering Colleges", icon: <GraduationCap strokeWidth={1.5} className="w-8 h-8" /> }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-blue-950 overflow-hidden" id="industries">
      {/* Background Decor */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-900/10 blur-[100px] pointer-events-none rounded-full"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-sm font-medium tracking-widest text-blue-300 uppercase mb-3">Sectors We Empower</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Serve</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-blue-900/40 hover:bg-blue-900/60 backdrop-blur-sm border border-blue-800/50 hover:border-blue-400/50 rounded-2xl p-6 transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden hover:-translate-y-1"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400/0 to-blue-400/0 group-hover:to-blue-400/10 transition-colors duration-300"></div>
              
              <div className="text-blue-300 mb-4 group-hover:scale-110 group-hover:text-white transition-all duration-300 relative z-10">
                {ind.icon}
              </div>
              <h4 className="font-medium text-blue-100 text-sm lg:text-base leading-snug relative z-10 group-hover:text-white transition-colors">
                {ind.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
