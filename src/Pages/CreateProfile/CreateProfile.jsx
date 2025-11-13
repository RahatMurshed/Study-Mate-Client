import React, { use } from "react";
import { FaUserPlus } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const CreatePartnerProfile = () => {

  const { user } = use(AuthContext);
  const axios = useAxios();

  const handleCreatePartner = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const profileimage = e.target.profileimage.value;
    const email = e.target.email.value;
    const partnerCount = e.target.partnerCount.value;
    const rating = e.target.rating.value;
    const experienceLevel = e.target.experienceLevel.value;
    const location = e.target.location.value;
    const availability = e.target.availability.value;
    const studyMode = e.target.studyMode.value;
    const subject = e.target.subject.value;

    const newPartner = {
      name,
      profileimage,
      subject,
      studyMode,
      availability,
      location,
      experienceLevel,
      rating,
      partnerCount,
      email
    }

    console.log(newPartner);




    axios.post('/create-profile', newPartner)
      .then(data => {
        console.log(data.data);
        Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
      })
      .catch(err=>{
        console.log(err.message);
      })



   





  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-10 bg-base-100 text-base-content px-4 py-16">
      <div className="w-full max-w-2xl bg-[#ffffff15] backdrop-blur-xl rounded-2xl border border-base-300 shadow-lg p-8">
        {/* --- Header --- */}
        <h2 className="text-3xl font-semibold text-center mb-2 text-base-content">
          Create Your Study Profile
        </h2>
        <p className="text-center text-base-content/60 mb-8 text-sm">
          Fill in your study details to find your perfect learning partner!
        </p>

        {/* --- Form --- */}
        <form
          onSubmit={handleCreatePartner}
          className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Profile Image URL</label>
            <input
              type="text"
              name="profileimage"
              placeholder="https://example.com/profile.jpg"
              className="input input-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g., English, Math, Programming"
              className="input input-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Study Mode */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Study Mode</label>
            <select
              name='studyMode'
              className="select select-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none">
              <option disabled selected>
                Select Mode
              </option>
              <option>Online</option>
              <option>In-person</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Availability Time</label>
            <input
              type="text"
              name="availability"
              placeholder="e.g., Evening 6–9 PM"
              className="input input-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City or Area"
              className="input input-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Experience Level</label>
            <select
              name="experienceLevel"
              className="select select-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none">
              <option disabled selected>
                Choose Level
              </option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Rating</label>
            <input
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              placeholder="e.g., 4.8"
              className="input input-bordered w-full text-base-content focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Partner Count */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Partner Count / Connections</label>
            <input
              type="number"
              name="partnerCount"
              readOnly
              defaultValue="0"
              className="input input-bordered w-full text-gray-400 focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Email (Read Only)</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="currentuser@email.com"
              className="input input-bordered w-full text-gray-400 focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* --- Create Button --- */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white px-4 py-2 rounded-xl font-semibold shadow-md shadow-[#F97316]/30 hover:shadow-[#F97316]/50 transition-all duration-300 w-full flex items-center justify-center gap-2"
          >
            <FaUserPlus />
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
