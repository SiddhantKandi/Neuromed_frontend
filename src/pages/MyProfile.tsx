import { assets } from "../assets/assets_frontend/assets"
import { useSelector } from "react-redux"
import { selectUser } from "../features/users/userSlice"
import { useState } from "react";
import { Tooltip } from "react-tooltip";

function MyProfile() {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState(user[0]?.email);
  const [phone, setPhone] = useState(user[0]?.contact);
  const [address, setAddress] = useState(user[0]?.address);
  const [gender, setGender] = useState(user[0]?.gender);
  const [birthday, setBirthday] = useState(user[0]?.birthDate);

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <div className="flex flex-row ">
        <img className="h-40 hover:cursor-pointer" src={assets.profile_pic} alt="Profile Pic"/>
        <img className="h-40 ml-1 hover:cursor-pointer" src={assets.upload_area} alt="Upload Pic"/>
      </div>
      <hr className="border-t border-gray-400 w-8/12 mt-4 mb-3 ml-2 mr-2" />
      <div className="flex flex-col mt-5"> 
        <h1 className="font-semibold text-lg underline">Contact Information</h1>
        <div className="flex flex-row mt-5 items-center">
          <p className="font-light mr-3 w-24 overflow-visible text-center">Email id :</p>
          <input 
          type="email"
          className="px-4 py-2 overflow-x-visible w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-row mt-5 items-center">
          <p className="font-light mr-3 overflow-visible text-center">Phone :</p>
          <input 
          className="px-4 py-2 overflow-x-visible text-center"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-row mt-5 items-center">
          <p className="font-light mr-3">Address :</p>
          <input 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="px-4 py-2 overflow-x-visible text-center"
          />
        </div>
        <h1 className="font-semibold text-lg mt-10 underline">Basic Information :</h1>
        <div className="flex flex-row mt-5">
          <p className="font-light mr-3">Gender : </p>
          <input 
          className="text-center px-4 py-2 overflow-x-visible" 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="flex flex-row mt-5">
          <p className="font-light mr-3 overflow-visible">Birthday :</p>
          <input
          className="text-center px-4 py-2 overflow-x-visible" 
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          data-tooltip-id="date-tooltip"
          data-tooltip-content="Enter your birth date here,should be in the format 01 Jan, 2025"
          data-tooltip-place="top"
          />
        </div>
      </div>

      <div className="flex flex-row items-center mt-10">
        <button className="px-4 py-4 rounded-full bg-purple-300 mr-10">Edit Information</button>
        <button className="px-8 py-4 rounded-full bg-green-400">Save</button>
      </div>

      <Tooltip id="date-tooltip"/>
      
    </div>
  )
}

export default MyProfile
