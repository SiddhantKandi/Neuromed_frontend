import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import {useState} from 'react'

function NavBar() {

  const navigate = useNavigate();
  // const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true)

  const navigateToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="flex items-center justify-between py-4 mb-3 border-b border-b-gray-500 ">
      <div className="flex items-center space-x-2 ml-2">
        <img onClick={() => {navigate('/')}} className="h-12 w-auto" src={assets.newlogo} alt="Neuromed Logo" />
        <h1 className="text-3xl font-extrabold text-blue-600">NeuroMed</h1>
      </div>

      <ul className="flex flex-row items-center space-x-4">
        <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-lg text-red-500 hover:text-orange-300" : "text-lg hover:text-orange-300"
            }
            >
            Home
            </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="text-lg hover:text-orange-300">
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-lg hover:text-orange-300">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-lg hover:text-orange-300">
            Contact
          </NavLink>
        </li>
      </ul>
      {
        token ?
        <div className="flex cursor-pointer items-center gap-2 relative mr-2 group">
          <img className= "w-8 rounded-full" src={assets.profile_pic} alt="profile_pic" />
          <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown_icon"/>
          <div className="absolute top-0 right-0 pt-14 p-2 group-hover:block hidden z-40">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-2 p-2">
              <p onClick = {() => navigate("/profile")} className="hover:cursor-pointer hover:text-orange-400">My Profile</p>
              <p onClick = {() => navigate("/my-appointments")} className="hover:cursor-pointer hover:text-orange-400">My Appointements</p>
              <p onClick = {() => setToken(false)} className="hover:cursor-pointer hover:text-orange-400">Logout</p>
            </div>
          </div>
        </div>
        :
        <button className="px-4 mr-3 py-2 rounded-full border-r-2 bg-purple-500 text-white hover:bg-purple-700 hover:text-yellow-300" onClick={navigateToLogin}>
          Create Account
        </button>
      }
    </div>
  );
}

export default NavBar;
