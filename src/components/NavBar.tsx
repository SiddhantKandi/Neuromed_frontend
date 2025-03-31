import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // New state for dropdown

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b border-gray-500 w-full">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          onClick={() => navigate("/")}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer"
          src={assets.newlogo}
          alt="Neuromed Logo"
        />
        <h1 className="lg:text-3xl sm:text-lg font-extrabold text-blue-600">NeuroMed</h1>
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex flex-col lg:flex-row absolute lg:static bg-white lg:bg-transparent top-16 right-0 w-full lg:w-auto p-6 lg:p-0 shadow-lg lg:shadow-none ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {["Home", "Doctors", "About", "Contact"].map((item, index) => (
          <li key={index} className="mb-3 lg:mb-0 lg:ml-4">
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-red-500 hover:text-orange-300"
                  : "text-lg hover:text-orange-300"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Section: Menu Button + Profile */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button */}
        <img
          className="lg:hidden block w-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          src={assets.menu_icon}
          alt="Menu icon"
        />

        {/* Profile & Login Button */}
        {token ? (
          <div className="relative flex items-center">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown state
            >
              <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && ( // Conditionally render dropdown
              <div className="absolute top-full right-0 mt-2 w-48 bg-stone-100 rounded-lg shadow-lg">
                <p
                  onClick={() => {
                    navigate("/profile");
                    setDropdownOpen(false);
                  }}
                  className="p-2 hover:cursor-pointer hover:text-orange-400"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/my-appointments");
                    setDropdownOpen(false);
                  }}
                  className="p-2 hover:cursor-pointer hover:text-orange-400"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                    setDropdownOpen(false);
                  }}
                  className="p-2 hover:cursor-pointer hover:text-orange-400"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-700 hover:text-yellow-300"
            onClick={navigateToLogin}
          >
            Create Account
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

