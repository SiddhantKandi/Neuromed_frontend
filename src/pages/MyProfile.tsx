import { assets } from "../assets/assets_frontend/assets";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/users/userSlice";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

function MyProfile() {
  const user = useAppSelector(selectUser);
  const [email, setEmail] = useState(user[0]?.email);
  const [phone, setPhone] = useState(user[0]?.contact);
  const [address, setAddress] = useState(user[0]?.address);
  const [gender, setGender] = useState(user[0]?.gender);
  const [birthday, setBirthday] = useState(user[0]?.birthDate);

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10 px-4">
      {/* Profile Picture Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <img className="h-32 w-32 sm:h-40 sm:w-40 hover:cursor-pointer object-cover rounded-full" 
          src={assets.profile_pic} alt="Profile Pic"/>
        <img className="h-32 w-32 sm:h-40 sm:w-40 hover:cursor-pointer object-cover rounded-lg" 
          src={assets.upload_area} alt="Upload Pic"/>
      </div>

      <hr className="border-t border-gray-400 w-full sm:w-8/12 mt-4 mb-3" />

      {/* Contact Information */}
      <div className="flex flex-col mt-5 w-full sm:w-8/12">
        <h1 className="font-semibold text-lg underline text-center">Contact Information</h1>

        <div className="flex flex-col sm:flex-row mt-5 items-center gap-3">
          <p className="font-light w-full sm:w-24 text-center">Email id:</p>
          <input 
            type="email"
            className="px-4 py-2 border rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row mt-5 items-center gap-3">
          <p className="font-light w-full sm:w-24 text-center">Phone:</p>
          <input 
            className="px-4 py-2 border rounded-md w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row mt-5 items-center gap-3">
          <p className="font-light w-full sm:w-24 text-center">Address:</p>
          <input 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="px-4 py-2 border rounded-md w-full"
          />
        </div>
      </div>

      {/* Basic Information */}
      <div className="flex flex-col mt-10 w-full sm:w-8/12">
        <h1 className="font-semibold text-lg underline text-center">Basic Information</h1>

        <div className="flex flex-col sm:flex-row mt-5 items-center gap-3">
          <p className="font-light w-full sm:w-24 text-center">Gender:</p>
          <input 
            className="px-4 py-2 border rounded-md w-full" 
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row mt-5 items-center gap-3">
          <p className="font-light w-full sm:w-24 text-center">Birthday:</p>
          <input
            className="px-4 py-2 border rounded-md w-full"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            data-tooltip-id="date-tooltip"
            data-tooltip-content="Enter your birth date here, should be in the format 01 Jan, 2025"
            data-tooltip-place="top"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">
        <button className="px-6 py-3 rounded-full bg-purple-300 w-full sm:w-auto">
          Edit Information
        </button>
        <button className="px-6 py-3 rounded-full bg-green-400 w-full sm:w-auto">
          Save
        </button>
      </div>

      <Tooltip 
        id="date-tooltip"
        className="max-w-xs text-center break-words p-2 bg-gray-800 text-white rounded-md"
      />

    </div>
  );
}

export default MyProfile;
