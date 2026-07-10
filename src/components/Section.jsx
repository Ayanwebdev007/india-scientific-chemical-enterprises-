import React from 'react';

const Section = ({ id, title, subtitle, children, className = '', bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
            {title && <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded"></div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
