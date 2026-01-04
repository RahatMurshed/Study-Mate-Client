import { FaUserCircle, FaUsers, FaEdit, FaHeadset } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import { use, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router";

const Dashboard = () => {

    const axios = useAxios();
     const { user } = use(AuthContext);
    const [connections, setConnections] = useState([]);

      useEffect(() => {
            if (!user?.email) return;
    
            axios.get(`/my-connections?email=${user.email}`)
                .then(data => {
                    
                    setConnections(data.data)
    
                })
                .catch(err => console.error(err));
    
        }, [axios, user]);
    

   


    return (
        <div className="min-h-screen bg-base-100  px-6">
            {/* Header */}
            <section className=" border-b border-base-300">
                <h1 className="text-3xl font-bold text-[#F97316]">Dashboard</h1>
                <p className="text-base-content mt-2">
                    Welcome back! Here's a quick overview of your StudyMate account.
                </p>
            </section>

            {/* Profile Summary */}
            <section className="py-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
                    <FaUserCircle className="text-[#F97316] text-4xl" />
                    <div>
                        <h2 className="text-xl font-semibold text-[#F97316] mb-4">Your Profile</h2>
                        <p className="text-base-content"><strong>Name</strong>: {user.displayName}</p>
                        <p className="text-base-content"><strong>Email</strong>: {user.email}</p>
                     
                        <p className="text-base-content"><strong>Created at: {new Date(Number(user.metadata.createdAt)).toLocaleDateString()}</strong></p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
                    <FaUsers className="text-[#F97316] text-4xl" />
                    <div>
                        <h2 className="text-xl font-semibold text-[#F97316] mb-4">Partner Stats</h2>
                        <p className="text-3xl font-bold text-base-content">Partner Count: {connections.length}</p>
                        <p className="text-sm text-base-content mt-2">
                            You've connected with {connections.length} study partners so far.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-10 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-[#F97316] mb-6">Quick Actions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Link to='/find-partners' className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-semibold py-4 rounded-lg shadow hover:bg-[#ea580c] transition">
                        <FaUsers /> View Partners
                    </Link>
                  
                    <Link to='/contact' className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-semibold py-4 rounded-lg shadow hover:bg-[#ea580c] transition">
                        <FaHeadset /> Contact Support
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 border-t border-base-300 text-center text-sm text-base-content">
                <p>© 2026 StudyMate. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;