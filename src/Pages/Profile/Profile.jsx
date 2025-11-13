import React, { use } from "react";
import { FaEnvelope, FaCheckCircle, FaUserCircle } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext";

const Profile = () => {
  const {user} = use(AuthContext);
  
  

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md sm:max-w-lg bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        {/* Profile Header */}
        <div className="flex flex-col items-center p-8 text-center">
          <div className="avatar mb-4">
            <div className="w-32 h-32 rounded-full ring ring-[#F97316] ring-offset-base-100 ring-offset-2">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="object-cover w-full h-full"
                />
              ) : (
                <FaUserCircle className="text-8xl text-gray-400" />
              )}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#F97316]">
            {user.displayName || "User Name"}
          </h2>

          <p className="text-sm text-gray-500">{user.uid}</p>

          <div className="flex items-center justify-center mt-2 gap-2">
            <FaEnvelope className="text-[#F97316]" />
            <p className="text-base">{user.email}</p>
          </div>

          {user.emailVerified && (
            <div className="mt-2 flex items-center justify-center text-green-600 font-medium">
              <FaCheckCircle className="mr-1" /> Email Verified
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="divider m-0"></div>

        {/* Details Section */}
        <div className="p-6 space-y-4 text-sm sm:text-base">
          <div className="flex justify-between">
            <span className="font-semibold">Anonymous Login:</span>
            <span>{user.isAnonymous ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Provider:</span>
            <span>{user.providerId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Created At:</span>
            <span>{new Date(Number(user.stsTokenManager?.createdAt || 1762939323643)).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Last Login:</span>
            <span>{new Date(Number(user.stsTokenManager?.lastLoginAt || 1763004631587)).toLocaleString()}</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
