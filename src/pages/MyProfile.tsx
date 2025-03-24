import { assets } from "../assets/assets_frontend/assets"

function MyProfile() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <img className="h-40" src={assets.profile_pic} alt="Profile Pic"/>
    </div>
  )
}

export default MyProfile
