const CreatePartnerProfile = () => {
  return (
    <div className="min-h-screen bg-base-100 mt-0">
      {/* Hero Section */}
      <section className="pb-12 px-6 bg-base-200 text-center">
        <h1 className="text-3xl font-bold text-[#F97316]">Join as a Partner</h1>
        <p className="text-base-content mt-2 max-w-2xl mx-auto">
          Become a StudyMate partner and share your expertise with learners worldwide. 
          Complete your profile to showcase your skills, availability, and experience.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Form Section */}
        <form className="space-y-6 bg-white p-8 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Profile Image URL</label>
            <input
              type="text"
              placeholder="https://example.com/profile.jpg"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Subject Expertise</label>
            <input
              type="text"
              placeholder="e.g., English, Math, Programming"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Teaching Mode</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]">
              <option>Select Mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Availability</label>
            <input
              type="text"
              placeholder="e.g., Evening 6–9 PM"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Location</label>
            <input
              type="text"
              placeholder="City or Area"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Experience Level</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]">
              <option>Choose Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Rating</label>
            <input
              type="text"
              placeholder="e.g., 4.8"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-base-200 text-base-content"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
             Create Partner Profile
          </button>
        </form>

     
      </div>

      {/* Motivation Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#F97316] mb-4">Why Join as a Partner?</h2>
        <p className="text-base-content max-w-2xl mx-auto">
          By creating a partner profile, you can showcase your expertise, connect with students globally,
          and grow your teaching career. A complete profile increases visibility and builds trust with learners.
        </p>
      </section>


    </div>
  );
};

export default CreatePartnerProfile;