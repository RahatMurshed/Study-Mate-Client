import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ProfileCard from "../ProfileCard/ProfileCard";
import useAxios from "../../Hooks/useAxios";


const TopStudyPartners = () => {
  const [partners, setPartners] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get('/top-partners')
   
      .then((data) => setPartners(data.data))
      .catch((err) => console.error("Error fetching partners:", err));
  }, [setPartners, axios]);


  return (
    <section className="py-16 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#F97316] to-orange-600 bg-clip-text text-transparent">
          Top Study Partners
        </h2>
        <p className="text-base-content mb-10 max-w-3xl mx-auto">
          Meet some of the highest-rated study partners on StudyMate. Learn,
          collaborate, and grow together.
        </p>

        <div className="grid gap-3 gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <ProfileCard key={partner._id} partner={partner}></ProfileCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStudyPartners;
