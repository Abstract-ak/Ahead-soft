import React from 'react';
import PropTypes from 'prop-types';

const locations = ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Ras Al Khaima'];

const LocationFilter = ({ activeLocation, onLocationChange }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => onLocationChange(location)}
            className={`px-8 py-2 text-sm font-medium font-sans rounded-md transition-colors duration-200 font-sans ${activeLocation === location
                ? 'bg-blue-800 text-white'
                : 'text-gray-500 hover:bg-gray-100'
              }`}
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

LocationFilter.propTypes = {
  activeLocation: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired
};

export default LocationFilter;