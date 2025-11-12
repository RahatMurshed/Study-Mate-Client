
import { FaSearch, FaSortAmountDown } from "react-icons/fa";
import { useLoaderData } from "react-router";
import PartnerCard from "../../Components/ProfileCard/ProfileCard";



const FindPartners = () => {


    const allPartners = useLoaderData();


    

  return (
    <div className="min-h-screen bg-base-100  py-10 pt-30 max-w-7xl  mx-auto px-6">
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
              placeholder="Search by subject"
              className="input border border-base-content input-sm join-item bg-base w-full "
            />
            <button className="btn btn-sm join-item bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white border-none hover:scale-105 transition">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Partner Cards Grid */}
      <div className="grid gap-3 gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       
        {
            allPartners.map(partner=> <PartnerCard key={partner._id} partner={partner}></PartnerCard>)
        }

        
      </div>

    
    </div>
  );
};

export default FindPartners;
