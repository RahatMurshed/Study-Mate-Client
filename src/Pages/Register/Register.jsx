import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from '../../Context/AuthContext';

const Register = () => {
  const { createUser, googleLogin, setUser } = useContext(AuthContext);
  

 

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setUser(createdUser);
        
      })
      .catch((error) => {
        console.error("Registration Error:", error);
      });
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white px-4 py-30 ">
      <div className="w-full max-w-lg bg-[#1E293B]/70 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg shadow-black/30 p-8">

        {/* --- Header --- */}
        <h2 className="text-3xl font-semibold text-center mb-2 ">
          Create Your Account
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Join StudyMate and find your perfect study partner!
        </p>

        {/* --- Form --- */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full bg-[#0F172A] border border-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F97316] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full bg-[#0F172A] border border-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F97316] transition"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/profile.jpg"
              className="w-full bg-[#0F172A] border border-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F97316] transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full bg-[#0F172A] border border-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F97316] transition"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-[#F97316]/40 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* --- Divider --- */}
        <div className="my-6 flex items-center justify-center">
          <div className="w-1/3 border-t border-gray-700"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="w-1/3 border-t border-gray-700"></div>
        </div>

        {/* --- Google Login --- */}
        <button
          onClick={googleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-700 hover:border-[#F97316] text-gray-300 hover:text-[#F97316] rounded-lg py-2 transition duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* --- Login Redirect --- */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#F97316] hover:text-orange-400 font-medium transition"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
