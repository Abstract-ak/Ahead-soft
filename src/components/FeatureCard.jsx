import React from "react";

const FeatureCard = ({ title, description, illustration, onClick }) => {
  return (
    <div
      // onClick={onClick}
      className="bg-sky-100 rounded-lg p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group relative h-64"
      role="button"
      tabIndex={0}
      // onKeyPress={(e) => {
      //   if (e.key === 'Enter' || e.key === ' ') onClick();
      // }}
    >
      <div className="absolute top-6 left-6 right-6 z-10 text-left ">
        <h2 className="text-xl font-bold text-gray-800 mb-1 break-words font-sans">
          {title}
        </h2>
        <p className="text-gray-600 break-words">{description}</p>
      </div>

      <div className="absolute right-0 bottom-0 opacity-80 pointer-events-none">
        {illustration}
      </div>
    </div>
  );
};

export default FeatureCard;
