import React, { useState } from "react";
import PropTypes from "prop-types";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineSwap } from "react-icons/ai";
import { MdPhotoSizeSelectActual } from "react-icons/md";

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const shareProperty = (e) => {
    e.stopPropagation();
    alert(`Sharing property: ${property.title}`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group relative">
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        <div className="absolute top-2 left-0 bg-green-600 text-white text-xs px-2 py-1 rounded-br-lg">
          Verified
        </div>

        {/* Icon on top-right */}
        <div className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-md p-1 cursor-pointer">
          <MdPhotoSizeSelectActual className="w-5 h-5" />
        </div>

        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {property.images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 text-lg">{property.title}</h3>

        <div className="flex justify-start items-center mt-2">
          <div className="flex flex-col items-start">
            <div className="text-blue-800 font-bold">AED {property.price}</div>
            <div className="text-xs text-gray-500 mt-1">AED 5/sqft</div>
          </div>

          <div className="h-8 border-l border-gray-300 mx-4"></div>

          <div className="flex flex-col items-start">
            <div className="text-gray-600">{property.area} sq.ft</div>
            <div className="text-xs text-gray-500 mt-1">
              Super Built-up Area
            </div>
          </div>
        </div>

        <div className="flex items-center mt-3 space-x-2 text-sm text-gray-600">
          <span>Ready to Move</span>
          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
          <span>{property.type}</span>
          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
          <span>{property.bedrooms}</span>
        </div>

        <div className="flex items-center mt-3">
          <div className="w-6 h-6 bg-gray-200 flex items-center justify-center text-xs">
            {property.agent.avatar || "👤"}
          </div>
          <div className="ml-2">
            <div className="text-xs text-gray-600">
              {property.agent.name} • {property.agent.timeAgo} ago
            </div>
            <div className="text-xs text-gray-600">
              {property.agent.company}
            </div>
          </div>
        </div>

        <hr className="my-3 border-t border-gray-400 opacity-50" />

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center text-sm text-gray-600">
            <FaLocationDot className="w-4 h-4 mr-1" />
            {property.location}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={toggleFavorite}
              className="p-1.5 rounded-full hover:bg-gray-100"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Heart
                className={`w-4 h-4 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </button>

            <button
              onClick={shareProperty}
              className="p-1.0 rounded-full hover:bg-gray-100"
              aria-label="Swap property"
            >
              <AiOutlineSwap className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
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
  }).isRequired,
};

export default PropertyCard;
