import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaUserFriends } from "react-icons/fa";

const MyConnections = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data
  const connections = [
    {
      name: "Sophia Johnson",
      image: "https://i.ibb.co/jDpRzVJ/usa-female1.jpg",
      subject: "Mathematics",
      mode: "Online",
    },
    {
      name: "Ethan Miller",
      image: "https://i.ibb.co/tb7Q3yS/usa-male1.jpg",
      subject: "Computer Science",
      mode: "Offline",
    },
    {
      name: "Olivia Brown",
      image: "https://i.ibb.co/2tRNY2b/usa-female2.jpg",
      subject: "English Literature",
      mode: "Online",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10 px-4 sm:px-6 lg:px-10 mt-20">
      {/* --- Header --- */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3 text-base-content">
          <FaUserFriends className="text-[#F97316]" />
          My Connections
        </h2>
        <p className="text-sm sm:text-base text-base-content/60 mt-2">
          Manage your study partner requests — update or remove them anytime.
        </p>
      </div>

      {/* --- Table for large screens --- */}
      <div className="hidden sm:block max-w-6xl mx-auto bg-base-200/30 dark:bg-base-300/20 backdrop-blur-xl rounded-2xl border border-base-300 shadow-md overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content/70 text-xs sm:text-sm uppercase">
            <tr>
              <th>#</th>
              <th>Partner</th>
              <th>Subject</th>
              <th>Study Mode</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {connections.map((partner, index) => (
              <tr key={index} className="hover:bg-base-200/40 transition-colors">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                        <img src={partner.image} alt={partner.name} />
                      </div>
                    </div>
                    <div className="font-semibold text-base-content">
                      {partner.name}
                    </div>
                  </div>
                </td>
                <td>{partner.subject}</td>
                <td>{partner.mode}</td>
                <td className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-sm rounded-lg bg-gradient-to-r from-[#F97316] to-orange-600 text-white border-none hover:from-orange-500 hover:to-[#F97316] transition-transform hover:scale-105"
                  >
                    <FaEdit className="text-sm" />
                    Update
                  </button>
                  <button className="btn btn-sm rounded-lg btn-outline border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white transition-transform hover:scale-105">
                    <FaTrashAlt className="text-sm" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Card layout for mobile --- */}
      <div className="sm:hidden grid grid-cols-1 gap-5 max-w-md mx-auto">
        {connections.map((partner, index) => (
          <div
            key={index}
            className="card bg-base shadow-md border border-base-300 rounded-xl p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={partner.image} alt={partner.name} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base">{partner.name}</h3>
                <p className="text-xs text-base-content/70">{partner.subject}</p>
                <p>
                <span className="font-medium text-base-content">Study Mode:</span>{" "}
                {partner.mode}
              </p>
              </div>
            </div>

           

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-xs rounded-lg bg-gradient-to-r from-[#F97316] to-orange-600 text-white border-none hover:from-orange-500 hover:to-[#F97316]"
              >
                <FaEdit />
              </button>
              <button className="btn btn-xs rounded-lg btn-outline border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Update Modal --- */}
      {isModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-100 border border-base-300 max-w-md sm:max-w-lg">
            <h3 className="font-bold text-lg mb-4 text-base-content">
              Update Partner Info
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:border-[#F97316] focus:outline-none"
                  placeholder="Edit partner name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:border-[#F97316] focus:outline-none"
                  placeholder="Edit subject"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Study Mode</label>
                <select className="select select-bordered w-full focus:border-[#F97316] focus:outline-none">
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="btn btn-outline border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white px-4 py-2 rounded-lg font-medium shadow-md shadow-[#F97316]/30 hover:shadow-[#F97316]/50 transition-all duration-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setIsModalOpen(false)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default MyConnections;
