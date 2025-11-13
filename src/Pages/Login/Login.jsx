import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from '../../Context/AuthContext';
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const { googleSignIn, setUser, signIn } = useContext(AuthContext);
  const axios = useAxios();
  const [err, setErr] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log("User logged in successfully:", loggedInUser);
        setErr(null);
        navigate(location.state || '/');

        axios.post('/user', loggedInUser)


      })
      .catch((error) => {
        console.log("Login Error:", error);
        setErr("Invalid Email or Password")
      });

  }



  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location.state || "/");


        axios.post('/user', result.user)


      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4 py-30">
      <div className="w-full max-w-lg bg-[#ffffff18] backdrop-blur-xl rounded-2xl border border-base-300 shadow-lg p-8">

        {/* --- Header --- */}
        <h2 className="text-3xl font-semibold text-center mb-2 text-base-content">
          Create Your Account
        </h2>
        <p className="text-center text-base-content/60 mb-8 text-sm">
          Join StudyMate and find your perfect study partner!
        </p>

        {/* --- Form --- */}
        <form onSubmit={handleLogIn} className="space-y-5">


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
            {err ? <p className="text-sm text-red-500 font-semibold pt-2">{err}</p> : null}
          </div>


          {/* Forgot Password */}
          <div className=" text-sm">
            <a
              href="#"
              className="text-[#F97316] hover:text-orange-600 hover:underline transition"
            >
              Forgot password?
            </a>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white px-4 py-2 rounded-xl font-semibold shadow-md shadow-[#F97316]/30 hover:shadow-[#F97316]/50 transition-all duration-300 w-full"
          >
            Register
          </button>
        </form>

        {/* --- Divider --- */}
        <div className="divider text-base-content/60">or</div>

        {/* --- Google Login --- */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline rounded-xl w-full "
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
          Does'nt have an account?{" "}
          <Link
            to="/login"
            className="text-[#F97316] hover:text-orange-700 font-medium transition"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
