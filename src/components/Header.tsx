import { FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets_frontend/assets";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-indigo-700 rounded-lg mx-4 md:mx-10 lg:mx-20 p-6 md:p-10 lg:p-20 mt-3">
      {/* Left Side */}
      <div className="flex flex-col md:w-7/12 w-full items-center md:items-start text-center md:text-left">
        <p className="text-white text-2xl md:text-3xl font-semibold">
          Book Appointments with Trusted Doctors
        </p>
        <div className="flex flex-row mt-3 items-center">
          <img
            src={assets.group_profiles}
            alt="group profiles"
            className="hidden md:block w-20 h-12"
          />
          <p className="text-white ml-2 text-sm md:text-base">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="mt-4 flex justify-center md:justify-start"
        >
          <button className="flex items-center text-blue-500 font-semibold bg-white px-4 py-2 rounded-full transition-transform duration-300 hover:-translate-y-1">
            Book Appointment
            <FaArrowRight className="text-black text-xl ml-2" />
          </button>
        </a>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-5/12 w-full flex justify-center mt-6 md:mt-0">
        <img
          src={assets.header_img}
          alt="header-img"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
}

export default Header;
