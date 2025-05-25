import React, { useState } from "react";

const LandingHero = () => {
  const [searchType, setSearchType] = useState("Buy");
  const [propertyType, setPropertyType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/francesca-tosolini-Pt0BM3bRs8M-unsplash.jpg)",
          filter: "brightness(0.8)",
        }}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* navigation */}
      <div className="px-4 md:px-8">
        <nav className="relative z-10 flex items-center justify-between border-b-2 px-8 py-4">
          <div className="text-white text-2xl font-bold">Realtor X</div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                For buyers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                For tenants
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                For owners
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                For dealers / builders
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Insights
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-200">Log in</button>
            <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
              Post a property
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        style={{ top: "20%" }}
      >
        <h1 className="text-6xl font-bold">
          Find Real Estate and Get Your Dream Space
        </h1>
        <p className="text-xl my-12">
          We are a real estate agency that will help you find the best residence
          you dream of, let's <br />
          discuss for your dream house?
        </p>

        {/* Search Section */}
        <div className="bg-white rounded-lg p-4 shadow-lg">
          {/* Buy/Rent Toggle */}
          <div className="flex mb-4 space-x-2">
            <button
              className={`px-6 py-2 rounded-md ${
                searchType === "Buy"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSearchType("Buy")}
            >
              Buy
            </button>
            <button
              className={`px-6 py-2 rounded-md ${
                searchType === "Rent"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSearchType("Rent")}
            >
              Rent
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-50 rounded-lg">
            {/* Property Type Dropdown */}
            <div className="relative flex-1">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-3 bg-transparent border-r text-gray-700 focus:outline-none"
              >
                <option value="">Property type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by location or Property ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-[2] p-3 bg-transparent text-gray-700 focus:outline-none"
            />

            {/* Location and Search Icons */}
            <div className="flex items-center px-4 space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
