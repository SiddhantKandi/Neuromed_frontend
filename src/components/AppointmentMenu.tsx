import { assets } from "../assets/assets_frontend/assets"
import { useNavigate } from 'react-router-dom';

function AppointmentMenu() {

    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-indigo-700 rounded-lg mx-20 p-6 h-60">
      {/* Left Section */}
      <div className="flex flex-col justify-center space-y-4 text-white w-2/3">
        <h2 className="text-3xl font-bold">Book Appointment With 100+ Trusted Doctors</h2>
        <button className="px-4 text-sm py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md w-40 hover:cursor-pointer transition-transform hover:scale-105 duration-300 ml-3"
        onClick={() => {navigate('/login'); scrollTo(0,0)}}>
          Create Account
        </button>
      </div>

      {/* Right Section */}
      <div className="w-1/3 flex justify-center">
        <img className="h-64 object-contain " src={assets.appointment_img} alt="Appointment Image"/>
      </div>
    </div>
  )
}

export default AppointmentMenu;

