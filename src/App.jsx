import React from 'react';
import PropertyListing from './components/PropertyListing';
import FeatureCards from './components/FeatureCards';

function App() {
  return (
    <>
      <div className="bg-slate-50 px-4 py-6">
        <FeatureCards />
      </div>

      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-sans text-gray-600 mb-8 text-center">
            Browse New Projects in the UAE
          </h1>
          <PropertyListing />
        </div>
      </div>
    </>
  );
}

export default App;
