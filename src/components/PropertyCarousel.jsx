import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyCard from './PropertyCard';

const PropertyCarousel = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 < properties.length - visibleCount + 1 ? prev + 1 : prev
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const translateXPercent = -(currentIndex * (100 / visibleCount));
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + visibleCount < properties.length;

  return (
    <div className="relative overflow-hidden w-full">
      {/* Carousel Track */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${(properties.length * 100) / visibleCount}%`,
          transform: `translateX(${translateXPercent}%)`,
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex-shrink-0 p-2"
            style={{ width: `${100 / properties.length}%` }}
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* Left Gradient */}
      {canGoPrev && (
        <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent h-full w-full" />
        </div>
      )}

      {/* Right Gradient */}
      {canGoNext && (
        <div className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent h-full w-full" />
        </div>
      )}

      {/* Carousel Left Button */}
      {canGoPrev && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-[190px] -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition"
          aria-label="Previous properties"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Carousel Right Button */}
      {canGoNext && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-[190px] -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition"
          aria-label="Next properties"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Hide scrollbar for WebKit */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

PropertyCarousel.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      area: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      bedrooms: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      agent: PropTypes.shape({
        name: PropTypes.string.isRequired,
        timeAgo: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default PropertyCarousel;
