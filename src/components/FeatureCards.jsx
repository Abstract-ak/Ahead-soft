import React from 'react';
import FeatureCard from './FeatureCard';
import { Building2, Car, Map } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      id: 'truestimate',
      title: 'TruEstimate',
      description: 'Find out how much your property is worth >',
      icon: <Building2 size={40} className="text-teal-600" />,
      illustration: <BuildingIllustration />,
    },
    {
      id: 'search',
      title: 'Search 2.0',
      description: 'Find homes by drive time >',
      icon: <Car size={40} className="text-blue-600" />,
      illustration: <CarIllustration />,
    },
    {
      id: 'map',
      title: 'Map View',
      description: 'Search for properties in preferred area using map',
      icon: <Map size={40} className="text-indigo-600" />,
      illustration: <MapIllustration />,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            illustration={feature.illustration}
          />
        ))}
      </div>
    </div>
  );
};

const BuildingIllustration = () => (
  <div className="relative h-32">
    <div className="absolute right-0 bottom-0 w-24 h-40 bg-teal-500 rounded-t-md"></div>
    <div className="absolute right-10 bottom-0 w-16 h-32 bg-teal-600 rounded-t-md"></div>
    <div className="absolute right-20 bottom-0 w-20 h-24 bg-teal-700 rounded-t-md"></div>
    <div className="absolute right-36 bottom-0 w-16 h-20 bg-teal-800 rounded-t-md"></div>
    <div className="absolute right-8 top-5 w-14 h-8 bg-amber-300 rounded-md transform rotate-12"></div>
    <div className="absolute bottom-0 left-6 w-6 h-6 bg-green-300 rounded-full"></div>
    <div className="absolute bottom-2 left-12 w-8 h-8 bg-green-400 rounded-full"></div>
    <div className="absolute bottom-4 left-0 w-5 h-5 bg-green-200 rounded-full"></div>
  </div>
);

const CarIllustration = () => (
  <div className="relative h-32">
    <div className="absolute left-0 right-0 bottom-10 h-1 bg-gray-300"></div>
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 w-40 h-20 bg-blue-800 rounded-md">
      <div className="absolute top-2 left-2 right-2 h-8 bg-blue-900 rounded"></div>
      <div className="absolute -bottom-2 left-4 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-600"></div>
      <div className="absolute -bottom-2 right-4 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-600"></div>
    </div>
    <div className="absolute right-4 top-0 w-20 h-24 bg-blue-400 opacity-20 rounded-md"></div>
    <div className="absolute right-10 top-6 w-14 h-18 bg-blue-500 opacity-20 rounded-md"></div>
  </div>
);

const MapIllustration = () => (
  <div className="relative h-32">
    <div className="absolute right-8 top-2 w-24 h-24 bg-indigo-100 rounded-md">
      <div className="absolute left-2 top-2 w-6 h-8 bg-indigo-200 rounded-md"></div>
      <div className="absolute right-2 bottom-2 w-8 h-6 bg-indigo-200 rounded-md"></div>
    </div>
    <div className="absolute right-24 bottom-2 w-12 h-16 bg-indigo-200 rounded-md">
      <div className="absolute top-1 left-1 right-1 h-3 bg-indigo-400 rounded-sm"></div>
      <div className="absolute bottom-1 left-1 right-1 h-3 bg-indigo-400 rounded-sm"></div>
    </div>
    <div className="absolute left-8 top-12 w-3 h-3 bg-green-400 rounded-full"></div>
    <div className="absolute left-12 top-8 w-5 h-5 bg-green-500 rounded-full"></div>
    <div className="absolute left-6 top-6 w-4 h-4 bg-green-300 rounded-full"></div>
    <div className="absolute right-40 top-10 w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
  </div>
);

export default FeatureCards;