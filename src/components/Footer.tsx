import { assets } from "../assets/assets_frontend/assets"

function Footer() {
  return (
    <div className="flex flex-col items-center">
    <div className="flex items-center justify-between py-4 mb-3 ml-6 mt-8 mr-6">
      {/* Left Section*/}
      <div className="w-8/12">
        <img className="h-12 w-auto" src={assets.newlogo} alt="Neuromed Logo" />
        <h1 className="text-3xl font-extrabold text-blue-600">NeuroMed</h1>
        <p className="font-semibold ">NeuroMed is an advanced patient management system designed to streamline healthcare processes for both doctors and patients. With features such as appointment scheduling, medical history tracking, and real-time patient monitoring, NeuroMed enhances efficiency in medical practices. Built with modern technology, it ensures secure data handling and seamless communication between healthcare providers and patients.</p>
      </div> 

      <div className=" items-center ml-10 mt-8">
        {/* Center Section */}
        <h1 className="text-2xl ml-4 mb-4">Company</h1>
        <ul className="flex flex-col items-center space-y-4 ml-4">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Private Policy</li>
        </ul>
      </div>

      <div className=" items-center ml-10 mt-8 mr-10 h-full">
        <h1 className="text-xl ml-4 flex flex-col mb-4">Get in touch</h1>
        {/* Center Section */}
        <ul className="flex flex-col items-center space-y-4 ml-4">
        <li>+91 1234567890</li>
        </ul>
      </div>

    </div>
      {/* Horizontal Line */}
      <hr className="border-t border-gray-400 w-full mt-4 mb-6 ml-2 mr-2" />
      <p className="flex items-center text-gray-700 mb-6">Copyright &copy; {new Date().getFullYear()} - All Rights Reversed</p>
    </div>
    
  )
}

export default Footer
