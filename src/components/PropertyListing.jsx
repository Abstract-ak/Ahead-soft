import React, { useEffect, useState } from "react";
import LocationFilter from "./LocationFilter";
import PropertyCarousel from "./PropertyCarousel";
import { propertyData } from "../data/propertyData";

const PropertyListing = () => {
  const [activeLocation, setActiveLocation] = useState("Dubai");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://staging.thunderscript.com/api/properties"
        );
        if (!response.ok) throw new Error("Failed to fetch properties");
        const data = await response.json();
        console.log("Fetched properties:", data);
        // setProperties(data?.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // Filter properties based on selected location
  const filteredProperties = ["Sharjah", "Abu Dhabi", "Dubai"].includes(
    activeLocation
  )
    ? // ? properties
      //   : properties.filter(
      //       (property) =>
      //         property.location?.trim().toLowerCase() ===
      //         activeLocation.trim().toLowerCase()
      //     );

      propertyData
    : propertyData.filter(
        (property) =>
          property.location.trim().toLowerCase() ===
          activeLocation.trim().toLowerCase()
      );

  return (
    <div>
      <LocationFilter
        activeLocation={activeLocation}
        onLocationChange={setActiveLocation}
      />

      <div className="mt-8">
        {filteredProperties.length > 0 ? (
          <PropertyCarousel properties={filteredProperties} />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center text-gray-600">
            <img
              src="src/notFound.png" // Replace with your asset or remove if unnecessary
              alt="Not Found"
              className="w-50 h-50 mb-6"
            />
            <p className="text-sm">
              No properties were found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;
