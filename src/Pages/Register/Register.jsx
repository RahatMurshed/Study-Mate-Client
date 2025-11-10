import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from '../../Context/AuthContext';

const Register = () => {
  const { createUser, googleLogin, setUser, profileUpdate, setLoading } = useContext(AuthContext);
  

 

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        
        // console.log(createdUser);
        

        profileUpdate({
            displayName: name,
            photoURL: photo
        })

        setLoading(true);

        const createdUser = result.user;
        

        setUser(createdUser);
        console.log("User registered successfully:", createdUser);
        

      })
      .catch((error) => {
        console.error("Registration Error:", error);
      });

      e.target.reset();
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4 py-30">
      <div className="w-full max-w-lg bg-base-200 backdrop-blur-xl rounded-2xl border border-base-300 shadow-lg p-8">

        {/* --- Header --- */}
        <h2 className="text-3xl font-semibold text-center mb-2 text-base-content">
          Create Your Account
        </h2>
        <p className="text-center text-base-content/60 mb-8 text-sm">
          Join StudyMate and find your perfect study partner!
        </p>

        {/* --- Form --- */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="input input-bordered w-full  text-base-content focus:border-[#F97316] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="input input-bordered w-full text-base-content focus:border-primary focus:outline-none"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/profile.jpg"
              className="input input-bordered w-full  text-base-content focus:border-primary focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-base-content/80">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="input input-bordered w-full text-base-content focus:border-primary focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn bg-gradient-to-r from-[#F97316] to-orange-700 w-full rounded-lg text-white"
          >
            Register
          </button>
        </form>

        {/* --- Divider --- */}
        <div className="divider text-base-content/60">or</div>

        {/* --- Google Login --- */}
        <button
          onClick={googleLogin}
          className="btn btn-outline w-full "
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        {/* --- Login Redirect --- */}
        <p className="text-center text-sm text-base-content/60 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#F97316] hover:text-orange-700 font-medium transition"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
