import React, { use, useEffect, useState } from "react";
import { FaTrashAlt, FaEdit, FaUserFriends, FaSpinner } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";


const MyConnections = () => {
    const axios = useAxios();
    const { user } = use(AuthContext);
    const [connections, setConnections] = useState(null);

    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [editData, setEditData] = useState({ name: "", subject: "", studyMode: "Online" });

    useEffect(() => {
        if (!user?.email) return;

        axios.get(`/my-connections?email=${user.email}`)
            .then(data => {
                console.log(data.data)
                setConnections(data.data)

            })
            .catch(err => console.error(err));

    }, [axios, user]);


    if (!connections) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <FaSpinner className="animate-spin text-4xl text-[#F97316]" />
            </div>
        );
    }


    const handleUpdateConnection = async (e) => {
        e.preventDefault();
        if (!selectedPartner) return;

        const updatedData = {
            name: editData.name,
            subject: editData.subject,
            studyMode: editData.studyMode,
        };

        try {
            await axios.patch(`/update-connection/${selectedPartner._id}`, updatedData);
            
            const updated = connections.map(data => data._id === selectedPartner._id ? { ...data, ...updatedData } : data);
            setConnections(updated);
            setIsModalOpen(false);
            setSelectedPartner(null);

            Swal.fire({ title: 'Updated', text: 'Connection updated successfully.', icon: 'success' });
        } catch (err) {
            console.error(err);
            Swal.fire({ title: 'Error', text: 'Failed to update connection.', icon: 'error' });
        }
    };



    const handleDelete = (_id, partnerId) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                 axios.delete(`/delete-connection/${_id}`)
         axios.patch(`/updateCount/${partnerId}`, { change: -1 })

        const remainingConnections = connections.filter(connection => connection._id !== _id);
        setConnections(remainingConnections)



                Swal.fire({
                    title: "Deleted!",
                    text: "Your connection has been deleted.",
                    icon: "success"
                });
            }
        });

        

    }






    return (
        <div className="min-h-screen bg-base-100 text-base-content py-10 px-4 sm:px-6 lg:px-10 mt-20">
            {/* --- Header --- */}
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-3 text-base-content">
                    <FaUserFriends className="text-[#F97316]" />
                    My Connections {connections?.length}
                </h2>
                <p className="text-sm  text-base-content/80 mt-2">
                    Manage your study partner requests — update or remove them anytime.
                </p>
            </div>

            {/* --- Table for large screens --- */}
            <div className="hidden sm:block max-w-6xl mx-auto bg-base-200/30  backdrop-blur-xl rounded-2xl border border-base-300 shadow-md overflow-x-auto">
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
                        {connections?.map((partner, index) => (
                            <tr key={index} className="hover:bg-base-200/40 transition-colors">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                                                <img src={partner.profileimage} alt={partner.name} />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-base-content">
                                            {partner.name}
                                        </div>
                                    </div>
                                </td>
                                <td>{partner.subject}</td>
                                <td>{partner.studyMode}</td>
                                <td className="flex flex-wrap justify-center gap-3">
                                    <button
                                        onClick={() => { setSelectedPartner(partner);
                                                         setEditData({ name: partner.name, subject: partner.subject, studyMode: partner.studyMode }); 
                                                         setIsModalOpen(true); }}
                                        className="btn btn-sm rounded-lg bg-gradient-to-r from-[#F97316] to-orange-600 text-white border-none hover:from-orange-500 hover:to-[#F97316] transition-transform hover:scale-105"
                                    >
                                        <FaEdit className="text-sm" />
                                        Update
                                    </button>
                                    <button
                                        onClick={() => { handleDelete(partner._id, partner.partnerId) }}
                                        className="btn btn-sm rounded-lg btn-outline border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white transition-transform hover:scale-105">
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
                {connections?.map((partner, index) => (
                    <div
                        key={index}
                        className="card bg-base shadow-md border border-base-300 rounded-xl p-4"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={partner.profileimage} alt={partner.name} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">{partner.name}</h3>
                                <p className="text-xs text-base-content/70">{partner.subject}</p>
                                <p>
                                    <span className="font-medium text-base-content">Study Mode:</span>{" "}
                                    {partner.studyMode}
                                </p>
                            </div>
                        </div>



                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => { setSelectedPartner(partner); setEditData({ name: partner.name, subject: partner.subject, studyMode: partner.studyMode }); setIsModalOpen(true); }}
                                className="btn btn-xs rounded-lg bg-gradient-to-r from-[#F97316] to-orange-600 text-white border-none hover:from-orange-500 hover:to-[#F97316]"
                            >
                                <FaEdit />
                            </button>
                            <button
                            onClick={()=>{handleDelete(partner._id, partner.partnerId)}}
                            className="btn btn-xs rounded-lg btn-outline border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white">
                                <FaTrashAlt />
                            </button>
                        </div>
                
                    </div>
                    
                 
                ))}
            </div>

                       {/* --- Update Modal --- */}
                
                    
                            {isModalOpen && selectedPartner && (
                                <dialog open className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box bg-base-100 border border-base-300 max-w-md sm:max-w-lg">
                                        <h3 className="font-bold text-lg mb-4 text-base-content">
                                            Update Partner Info
                                        </h3>

                                        <form onSubmit={handleUpdateConnection} className="space-y-4">
                                            <div>
                                                <label className="block text-sm mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editData.name}
                                                    onChange={(e) => setEditData(prevData => ({ ...prevData, name: e.target.value }))}
                                                    className="input input-bordered w-full focus:border-[#F97316] focus:outline-none"
                                                    placeholder="Edit partner name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm mb-2">Subject</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={editData.subject}
                                                    onChange={(e) => setEditData(prevData => ({ ...prevData, subject: e.target.value }))}
                                                    className="input input-bordered w-full focus:border-[#F97316] focus:outline-none"
                                                    placeholder="Edit subject"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm mb-2">Study Mode</label>
                                                <select
                                                    name="studyMode"
                                                    value={editData.studyMode}
                                                    onChange={(e) => setEditData(prevData => ({ ...prevData, studyMode: e.target.value }))}
                                                    className="select select-bordered w-full focus:border-[#F97316] focus:outline-none">
                                                    <option>Online</option>
                                                    <option>Offline</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                                                    onClick={() => { setIsModalOpen(false); setSelectedPartner(null); }}
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
                                        <button onClick={() => { setIsModalOpen(false); setSelectedPartner(null); }}>close</button>
                                    </form>
                                </dialog>
                            )}
                
        </div>
    );
};

export default MyConnections;
