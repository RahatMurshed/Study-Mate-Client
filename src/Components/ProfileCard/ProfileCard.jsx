import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const PartnerCard = ({ partner }) => {

  
  

  //  Dynamic rating rendering
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => {
      if (i < Math.floor(rating))
        return <FaStar key={i} className="text-[#F97316]" />;
      if (i < rating)
        return <FaStarHalfAlt key={i} className="text-[#F97316]" />;
      return (
        <FaRegStar key={i} className="text-gray-400 dark:text-gray-500" />
      );
    });
  };

  return (
    <div className="card card-side bg-base-100  border border-base-content shadow-md hover:shadow-xl hover:-translate-y-[3px] transition-all duration-300 rounded-2xl overflow-hidden group">
      {/* Left image */}
      <figure className="relative w-40 h-auto overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={partner.profileimage || "https://i.ibb.co/HT7C2kV/user.png"}
          alt={partner.name}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
      </figure>

      {/* Content */}
      <div className="card-body px-5 py-5 flex flex-col justify-between">
        <div className="space-y-1.5 text-left">
          <h2 className="card-title text-lg font-semibold text-base-content dark:text-white leading-snug">
            {partner.name}
          </h2>
          <p className="text-sm text-base-content dark:text-gray-400">{partner.subject}</p>
          <p className="text-sm text-base-content dark:text-base-content">
            Level: <span className="font-medium">{partner.experienceLevel}</span>
          </p>
          <p className="text-sm text-base-content dark:text-base-content">
            Study Mode: <span className="font-medium">{partner.studyMode}</span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          {renderStars(partner.rating)}
          <span className="text-sm text-base-content dark:text-base-content ml-1">
            {partner?.rating}
          </span>
        </div>

        {/* Button */}
        <div className="card-actions mt-4">
          <Link to={`/partner-details/${partner._id}`} className="btn w-full rounded-full bg-gradient-to-r from-[#F97316] to-[#ea580c] border-none text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
