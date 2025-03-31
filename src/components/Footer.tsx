import { assets } from "../assets/assets_frontend/assets"
import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 w-full">
      
      {/* Main Footer Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl py-8">
        
        {/* Left Section */}
        <div className="w-full lg:w-5/12 text-center lg:text-left">
          <img className="h-12 w-auto mx-auto lg:mx-0" src={assets.newlogo} alt="Neuromed Logo" />
          <h1 className="text-3xl font-extrabold text-blue-600 mt-2">NeuroMed</h1>
          <p className="font-semibold mt-3 text-gray-700">
            NeuroMed is an advanced patient management system designed to streamline healthcare processes for both doctors and patients. With features such as appointment scheduling, medical history tracking, and real-time patient monitoring, NeuroMed enhances efficiency in medical practices.
          </p>
        </div>

        {/* Center Section */}
        <div className="w-full lg:w-3/12 mt-8 lg:mt-0 flex flex-col items-center">
          <h1 className="text-2xl mb-4">Company</h1>
          <ul className="space-y-4 text-center">
            <li className="hover:cursor-pointer hover:text-indigo-600" onClick={() => navigate('/')}>Home</li>
            <li className="hover:cursor-pointer hover:text-indigo-600" onClick={() => navigate('/about')}>About us</li>
            <li className="hover:cursor-pointer hover:text-indigo-600" onClick={() => navigate('/contact')}>Contact us</li>
            <li className="hover:cursor-pointer hover:text-indigo-600">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/12 mt-8 lg:mt-0 flex flex-col items-center">
          <h1 className="text-xl mb-4">Get in touch</h1>
          <p className="text-center">+91 1234567890</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-400 w-full my-6" />
      
      {/* Copyright */}
      <p className="text-gray-700 text-center">
        Copyright &copy; {new Date().getFullYear()} - All Rights Reserved
      </p>
      
    </div>
  )
}

export default Footer;
