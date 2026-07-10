import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const categoryData = {
  'scientific-instruments': {
    title: 'Scientific Laboratory Instruments',
    desc: 'High-precision scientific instruments used for research, experiments, and quality testing in laboratories and educational institutions.',
    items: [
      'Microscopes', 'Analytical Balances', 'Hot Air Ovens', 'Incubators', 
      'Spectrophotometers', 'pH Meters', 'Centrifuges', 'Laboratory Furnaces'
    ]
  },
  'civil-engineering': {
    title: 'Civil Engineering Testing Equipment',
    desc: 'Equipment for soil, cement, concrete, aggregate, and bitumen testing used by civil engineers, contractors, and PWD departments.',
    items: [
      'Soil Testing Kits', 'CBR Apparatus', 'Proctor Compaction Equipment', 'Liquid Limit Apparatus', 'Direct Shear Apparatus',
      'Compression Testing Machine (CTM)', 'Slump Cone', 'Cube Moulds', 'Vicat Apparatus', 'Sieves', 'Concrete Mixers',
      'Penetrometer', 'Softening Point Apparatus', 'Ductility Testing Machine', 'Flash & Fire Point Tester',
      'Impact Testing Machine', 'Crushing Value Apparatus', 'Los Angeles Abrasion Machine'
    ]
  },
  'laboratory-chemicals': {
    title: 'Laboratory & Industrial Chemicals',
    desc: 'We supply high-quality chemicals for laboratory analysis, research, and bulk industrial use.',
    items: [
      'Hydrochloric Acid (HCl)', 'Sulphuric Acid', 'Nitric Acid', 'Sodium Hydroxide', 
      'Potassium Permanganate', 'Ethanol', 'Methanol', 'Laboratory Reagents', 'Commercial Chemicals'
    ]
  },
  'laboratory-glassware': {
    title: 'Borosil Laboratory Glassware',
    desc: 'Premium quality borosilicate glassware for all laboratory needs.',
    items: [
      'Beakers', 'Flasks', 'Test Tubes', 'Measuring Cylinders', 'Pipettes', 'Burettes', 'Funnels'
    ]
  },
  'consumables': {
    title: 'Filter Papers & Consumables',
    desc: 'Essential laboratory consumables for filtration and everyday use.',
    items: [
      'Whatman Filter Paper', 'Laboratory Filtration Kits', 'Water Testing Kits', 'Chemical Analysis Tools'
    ]
  }
};

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = categoryData[categorySlug];

  if (!category) {
    return (
      <Section className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h2>
        <Link to="/" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </Section>
    );
  }

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/#products" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{category.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{category.desc}</p>
        </div>
      </div>

      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex items-start hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
              <span className="font-semibold text-gray-800 text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Quotation?</h3>
          <p className="text-gray-700 mb-6 text-lg">Contact our sales team with your specific requirements and quantities.</p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-md">
            Request Quote
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default CategoryPage;
