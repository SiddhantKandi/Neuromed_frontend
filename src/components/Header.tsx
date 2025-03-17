import { FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets_frontend/assets"

function Header() {
  return (
    <div className="flex flex-row bg-indigo-700 rounded-lg ml-20 mr-20 mx-auto p-4">
      {/*Left Side */}
        <div className="flex flex-col w-7/12 items-center justify-center">
            <p className="text-white text-3xl font-semibold items-center">Book Appointments with Trusted Doctors</p>
            <div className="flex flex-row mt-2 ml-5">
                <img src={assets.group_profiles} alt="group profiles"/>
                <p className="text-white ml-2">Simply browse through our extensive list of trusted doctors, 
                schedule your appointment hassle-free.</p>
            </div>
            <div className="flex flex-row mt-2 justify-between w-full items-center font-semibold relative">
                <button className="flex flex-row text-blue-500 font-semibold bg-white px-4 py-2 ml-4 rounded-full mt-2 transition-transform duration-300 hover:-translate-y-1 hover:cursor-pointer">Book Appointment
                <FaArrowRight className="text-black text-2xl ml-4 mr-4"/>
                </button>
            </div>
        </div>
      

      {/*Right Side */}
      <div className="w-5/12 items-center">
        <img src={assets.header_img} alt="header-img"/>
      </div>
    </div>
  )
}

export default Header
