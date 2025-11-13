import { Facebook, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    className="w-5 h-5 text-[#F97316]"
    fill="currentColor"
  >
    <path d="M714.163 545.608L1160.89 0H1057.01L666.163 460.396L362.625 0H0L468.901 682.802L0 1226.37H103.875L515.611 739.812L837.375 1226.37H1200L714.138 545.608H714.163ZM568.312 676.562L521.694 609.869L141.481 79.6426H311.797L611.778 507.758L658.396 574.451L1056.68 1150.36H886.364L568.312 676.587V676.562Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content border-t border-base-300 mt-16">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div >
          
          <Link to='/'>
          <h2 className="text-2xl flex items-center  font-bold text-[#F97316] mb-3"><span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-8 h-8 text-[#F97316] group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
          >
            <path d="M10 40 L50 20 L90 40 L50 60 Z M50 60 V80 L90 60 V40 Z" />
          </svg>
            </span> StudyMate</h2>
          </Link>
          <p className="text-sm text-base-content/70 leading-relaxed">
            Empowering learners to connect, collaborate, and grow together. 
            Find your perfect study partner and achieve more — together.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-5">
            <a href="https://www.facebook.com/groups/phweb12?checkpoint_src=any" target="blank" className="p-2 rounded-full bg-base-200 hover:bg-[#F97316]/20 transition">
              <Facebook className="w-5 h-5 text-[#F97316]" />
            </a>
            <a href="https://x.com/" target="blank" className="p-2 rounded-full bg-base-200 hover:bg-[#F97316]/20 transition">
              <XIcon />
            </a>
            <a href="https://www.linkedin.com/in/rahat-murshed-62434b369/" target="blank" className="p-2 rounded-full bg-base-200 hover:bg-[#F97316]/20 transition">
              <Linkedin className="w-5 h-5 text-[#F97316]" />
            </a>
            <a href="https://www.instagram.com/" target="blank" className="p-2 rounded-full bg-base-200 hover:bg-[#F97316]/20 transition">
              <Instagram className="w-5 h-5 text-[#F97316]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li><a href="/" className="hover:text-[#F97316] transition">Home</a></li>
            <li><a href="/find-partners" className="hover:text-[#F97316] transition">Find Partners</a></li>
            <li><a href="/create-profile" className="hover:text-[#F97316] transition">Create Profile</a></li>
            <li><a href="/my-connections" className="hover:text-[#F97316] transition">My Connections</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li><a href="/help" className="hover:text-[#F97316] transition">Help Center</a></li>
            <li><a href="/privacy" className="hover:text-[#F97316] transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-[#F97316] transition">Terms & Conditions</a></li>
            <li><a href="/contact" className="hover:text-[#F97316] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm text-base-content/70">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#F97316]" />
              <span>support@studymate.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#F97316]" />
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300 text-center py-4 text-sm text-base-content/60">
        © {new Date().getFullYear()} StudyMate. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
