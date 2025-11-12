
import React from "react";
import { FaSearch, FaSortAmountDown } from "react-icons/fa";

const FindPartners = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 sm:px-6 lg:px-10 py-10 pt-30 w-9/12 mx-auto">
      {/* Header */}
      <div className=" mb-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
            Find Partners
          </h1>
          <p className="text-sm md:text-md lg:text-lg text-base-content mt-1 mb-5">
            Explore and connect with study partners that match your goals.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between lg:flex-row gap-3 mt-4 sm:mt-0">
          {/* Sort */}
          <div className="flex items-center gap-2 border border-base-content rounded-lg px-3 mx-auto md:mx-0  bg-base w-40">
            <FaSortAmountDown className="text-[#F97316]" />
            <select
              className="select select-sm bg-base border-none focus:outline-none font-medium"
              defaultValue="rating-desc"
            >
              <option value="rating-desc">Top Rated</option>
              <option value="rating-asc">Lowest Rated</option>
              <option value="experience">Experience Level</option>
             
            </select>
          </div>

          {/* Search */}
          <div className="join w-80 mx-auto  md:w-90  md:mx-0">
            <input
              type="text"
              placeholder="Search by name or subject"
              className="input input-bordered input-sm join-item bg-base-100 w-full"
            />
            <button className="btn btn-sm join-item bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white border-none hover:scale-105 transition">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Partner Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
        {/*  
            {partners.map((p) => (
              <PartnerCard key={p.email} partner={p} />
            ))}
        */}

        {/* Placeholder cards for layout preview */}
        <div className="skeleton h-56 w-full rounded-2xl"></div>
        <div className="skeleton h-56 w-full rounded-2xl"></div>
        <div className="skeleton h-56 w-full rounded-2xl"></div>
      </div>

    
    </div>
  );
};

export default FindPartners;
