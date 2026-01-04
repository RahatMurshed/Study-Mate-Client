import { Link, useNavigate, useParams } from "react-router";
import { use, useEffect } from "react";
import { FaSpinner, FaLinkedin, FaTwitter } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const PartnerDetails = () => {
    const { id } = useParams();
    const { user, partner, setPartner } = use(AuthContext);
    const navigate = useNavigate();

    const axios = useAxios();

    useEffect(() => {
        axios.get(`/partner-details/${id}`).then((data) => {
            setPartner(data.data);
        });
    }, [id, axios, setPartner]);

    if (!partner) {
        return (
            <div className="flex justify-center items-center h-screen">
                <FaSpinner className="animate-spin text-4xl text-[#F97316]" />
            </div>
        );
    }

    const handlePartnerCount = async () => {
        if (!user) {
            return navigate('/login');
        }
        const myConnection = {
            partnerId: partner._id,
            name: partner.name,
            email: user.email,
            profileimage: partner.profileimage,
            subject: partner.subject,
            studyMode: partner.studyMode,
            partnerCount: partner.partnerCount,
        };

        await axios.post("/my-connection", myConnection);
        await axios.patch(`/updateCount/${id}`, { change: 1 }).then(() => {
            setPartner({ ...partner, partnerCount: partner.partnerCount + 1 });
        });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your connection has been sent!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className="min-h-screen bg-base-100 mt-30 px-6 max-w-7xl mx-auto ">
            {/* Hero Section */}
            <div className="bg-base-200 rounded-xl shadow-sm p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                <img
                    src={partner.profileimage}
                    alt={partner.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-[#F97316]"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-[#F97316]">{partner.name}</h1>
                    <p className="text-lg text-base-content">{partner.subject}</p>
                    <div className="mt-4 flex items-center gap-4">
                        <span className="text-[#F97316] font-bold px-4 py-2 rounded-lg  shadow-md">
                            Partner Count: {partner.partnerCount}
                        </span>
                        <span className="text-sm text-base-content">
                            Rating: {partner.rating} / 5
                        </span>
                    </div>
                    <button
                        onClick={handlePartnerCount}
                        className="mt-6 btn bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold rounded-lg px-6"
                    >
                        Send Partner Request
                    </button>
                </div>
            </div>

            {/* Details Section */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold text-[#F97316] mb-3">Overview</h2>
                    <ul className="space-y-2 text-base-content">
                        <li><strong>Qualification:</strong> {partner.qualification}</li>
                        <li><strong>Institution:</strong> {partner.institution}</li>
                        <li><strong>Experience:</strong> {partner.yearsOfExperience} years</li>
                        <li><strong>Availability:</strong> {partner.availabilityTime}</li>
                        <li><strong>Location:</strong> {partner.location}</li>
                        <li><strong>Study Mode:</strong> {partner.studyMode}</li>
                        <li><strong>Email:</strong> {partner.email}</li>
                        <li><strong>Phone:</strong> {partner.phone}</li>
                        <li><strong>Hourly Rate:</strong> ${partner.hourlyRate}</li>
                        <li><strong>Languages:</strong> {partner.languages?.join(", ")}</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-[#F97316] mb-3">About</h2>
                    <p className="text-base-content">{partner.bio}</p>

                    <h2 className="text-xl font-semibold text-[#F97316] mt-6 mb-3">Teaching Style</h2>
                    <p className="text-base-content">{partner.teachingStyle}</p>

                    {partner.certifications && (
                        <>
                            <h2 className="text-xl font-semibold text-[#F97316] mt-6 mb-3">Certifications</h2>
                            <ul className="list-disc list-inside text-base-content">
                                {partner.certifications.map((cert, idx) => (
                                    <li key={idx}>{cert}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>

            {/* Reviews Section */}
            {partner.reviews && (
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-[#F97316] mb-3">Student Reviews</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {partner.reviews.map((review, idx) => (
                            <div key={idx} className="p-4 bg-base-200 rounded-lg shadow-sm">
                                <p className="font-semibold">{review.studentName}</p>
                                <p className="text-sm">{review.comment}</p>
                                <p className="text-xs text-[#F97316]">Rating: {review.rating}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
                {partner.socialLinks?.linkedin && (
                    <a
                        href={partner.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F97316] hover:text-[#ea580c] text-xl"
                    >
                        <FaLinkedin />
                    </a>
                )}
                {partner.socialLinks?.twitter && (
                    <a
                        href={partner.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F97316] hover:text-[#ea580c] text-xl"
                    >
                        <FaTwitter />
                    </a>
                )}
            </div>

            {/* Back Button */}
            <div className="mt-10">
                <Link
                    to={-1}
                    className="btn btn-outline border-orange-500 text-base-content hover:bg-base-300"
                >
                    Back
                </Link>
            </div>
        </div>
    );
};

export default PartnerDetails;