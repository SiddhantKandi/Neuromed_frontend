import { assets } from "../assets/assets_frontend/assets"
import { useNavigate } from 'react-router-dom';

function AppointmentMenu() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-indigo-700 rounded-lg mx-4 sm:mx-10 md:mx-20 p-6 h-auto lg:h-60">
      {/* Left Section */}
      <div className="flex flex-col justify-center space-y-4 text-white text-center lg:text-left w-full lg:w-2/3">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Book Appointment With 100+ Trusted Doctors
        </h2>
        <button 
          className="px-4 text-sm py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md w-40 mx-auto lg:ml-3 hover:cursor-pointer transition-transform hover:scale-105 duration-300"
          onClick={() => {navigate('/login'); scrollTo(0,0)}}
        >
          Create Account
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
        <img className="h-40 sm:h-56 md:h-64 max-w-xs sm:max-w-md lg:max-w-lg object-contain" 
          src={assets.appointment_img} 
          alt="Appointment Image"
        />
      </div>
    </div>
  );
}

export default AppointmentMenu;
