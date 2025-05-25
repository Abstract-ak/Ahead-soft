import React, { useState, useEffect } from 'react';
import LocationFilter from './LocationFilter';
import PropertyCarousel from './PropertyCarousel';

const PropertyListing = () => {
  const [activeLocation, setActiveLocation] = useState('Dubai');
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/properties?search=${encodeURIComponent(activeLocation)}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setPropertyData(result?.data || []);
      } catch (error) {
        console.error('Failed to fetch property data:', error);
        setPropertyData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [activeLocation]);  // refetch when location changes

  return (
    <div>
      <LocationFilter
        activeLocation={activeLocation}
        onLocationChange={setActiveLocation}
      />

      <div className="mt-8">
        {loading ? (
          <div className="text-center text-gray-600 py-20">Loading properties...</div>
        ) : propertyData.length > 0 ? (
          <PropertyCarousel properties={propertyData} />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center text-gray-600">
            <img
              src="src/notFound.png"
              alt="Not Found"
              className="w-50 h-50 mb-6"
            />
            <p className="text-sm">No properties were found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;
