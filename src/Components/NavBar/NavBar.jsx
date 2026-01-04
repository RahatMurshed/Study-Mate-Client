import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login")
        Swal.fire({
          title: "Logged out!",
          text: "Successfully logged out!!.",
          icon: "success"
        });
      })
      .catch((error) => console.error("Logout Error:", error));
  };

 

  const link = (
    <>
      <NavLink
        to="/"
        className="relative text-base-content lg:text-xl font-semibold hover:text-orange-400 transition duration-300 group"
      >
        Home
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
      </NavLink>
      <NavLink
        to="/find-partners"
        className="relative text-base-content lg:text-xl font-semibold hover:text-orange-500 transition duration-300 group"
      >
        Find Partners
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
      </NavLink>
      <NavLink
        to="/about"
        className="relative text-base-content lg:text-xl font-semibold hover:text-orange-500 transition duration-300 group"
      >
        About
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
      </NavLink>
      <NavLink
        to="/contact"
        className="relative text-base-content lg:text-xl font-semibold hover:text-orange-500 transition duration-300 group"
      >
        Contact
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
      </NavLink>
      {user && (
        <>
      
          <NavLink
            to="/dashboard/overview"
            className="relative text-base-content lg:text-xl font-semibold hover:text-orange-400 transition duration-300 group"
          >
            Dashboard
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50  border-b-5 bg-white/30 backdrop-blur-xl border-b border-base-content/10 shadow-lg transition-all duration-300">
      
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
       

        {/* --- LOGO --- */}
        <div className="flex items-center space-x-2 group ">

{/* --- THEME TOGGLE --- */}
      <input type="checkbox" value="night" className="toggle theme-controller" />

          <Link to='/' className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-8 h-8 text-[#F97316] group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
          >
            <path d="M10 40 L50 20 L90 40 L50 60 Z M50 60 V80 L90 60 V40 Z" />
          </svg>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-orange-500 text-xl font-extrabold tracking-wide">
            StudyMate
          </h1>
          </Link>
        </div>

        

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium">
          {link}
        </div>

        {/* --- AUTH SECTION --- */}
        <div className="hidden md:flex items-center space-x-5">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition"
              >
                <div className="w-10 rounded-full ring ring-[#F97316]/40 ring-offset-2">
                  <img
                    alt="User Avatar"
                    src={
                      user?.photoURL ||
                      "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-701751695033488zipyc2pvo5.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 text-base-content rounded-xl mt-3 w-52 p-2 shadow-xl border border-base-content/10 backdrop-blur-lg"
              >
                <li>
                  <Link to='/profile' className="hover:text-[#F97316]">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:text-[#F97316]">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-base-content font-bold lg:text-xl  hover:text-[#F97316] transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white px-4 py-2 rounded-xl font-semibold shadow-md shadow-[#F97316]/30 hover:shadow-[#F97316]/50 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          )}
          
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <button
          className="md:hidden text-base-content/80 hover:text-[#F97316] transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      
      </div>
      

      

      {/* --- MOBILE MENU --- */}
      {isOpen && (
        <div className="md:hidden bg-base-200 border-t border-base-content/10 backdrop-blur-lg">
          
          <div className="flex flex-col items-center space-y-5 py-5">
           

           {link}
            {user ? (
              <>
                <Link to='/profile' className="text-base-content/80 hover:text-[#F97316]">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-base-content/80 hover:text-[#F97316]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
              
                <Link
                  to="/login"
                  className="text-base-content/80 hover:text-[#F97316] transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white px-5 py-2 rounded-xl font-semibold shadow-md shadow-[#F97316]/40 hover:shadow-[#F97316]/60 transition-all duration-300"
                >
                  Get Started
                </Link>

                
              </>
              
            )}
            
          </div>
          
        </div>
        
      )}
      
    </nav>
  );
};

export default Navbar;
