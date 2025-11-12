import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { FaSpinner } from "react-icons/fa";
import useAxios from "../../Hooks/UseAxios";

const PartnerDetails = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);
  const [partnerCount, setPartnerCount] = useState(null);
  const axios = useAxios();


  useEffect(() => {
    axios.get(`/partner-details/${id}`)
    .then(data=>{
        console.log(data.data);
        setPartner(data.data)
    })
  }, [id, axios]);

  console.log(partner)

  if (!partner) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-[#F97316]" />
      </div>
    );
  }

  const  handlePartnerCount = async ()=>{
     await axios.post('/my-connection', partner)
     .then(data=>{
        console.log(data.data);
     })
    
     
    
     

    await axios.patch(`/increament/${id}`)
     .then(data=>{
        console.log('After Update: ', data.data)
        setPartner(partner.patnerCount + 1)
     })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-base-100 mt-24">
      <div className="card w-full max-w-3xl bg-base-200 shadow-xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <figure className="w-full bg-base-300 flex justify-center items-center">
          <img
            src={partner.profileimage}
            alt={partner.name}
            className="w-full max-h-[400px] sm:max-h-[450px] md:max-h-[400px] object-contain rounded-t-2xl"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body p-5 sm:p-7">
          <h2 className="card-title text-2xl md:text-3xl font-bold mb-2 text-[#F97316]">
            {partner.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
            <p>
              <span className="font-semibold">📘 Subject:</span> {partner.subject}
            </p>
            <p>
              <span className="font-semibold">🎓 Experience:</span>{" "}
              {partner.experienceLevel}
            </p>
            <p>
              <span className="font-semibold">🕓 Availability:</span>{" "}
              {partner.availabilityTime}
            </p>
            <p>
              <span className="font-semibold">📍 Location:</span>{" "}
              {partner.location}
            </p>
            <p>
              <span className="font-semibold">⭐ Rating:</span> {partner.rating}
            </p>
            <p>
              <span className="font-semibold">👥 Partner Count:</span>{" "}
              {partner.patnerCount}
            </p>
            <p>
              <span className="font-semibold">🧑‍💻 Study Mode:</span>{" "}
              {partner.studyMode}
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span> {partner.email}
            </p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
            onClick={handlePartnerCount}
            
              className="btn w-full sm:w-auto bg-[#F97316] border-none hover:bg-[#ea580c] text-white font-semibold rounded-lg px-6 transition-all duration-300"
              
            >
              Send Partner Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
