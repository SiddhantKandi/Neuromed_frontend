import { assets } from "../assets/assets_frontend/assets"

function About() {
  return (
    <div className=" flex items-center flex-col">
      <div className="flex flex-row mt-10">

          {/* Image section*/} 
          <div className="ml-8 w-3/12">
            <img src={assets.about_image} alt="About image"/>
          </div>

          {/* Text section */}
          <div className="ml-6 border border-gray-300 w-8/12 rounded-md">
            <p className="ml-3 mt-1">
            Welcome to NeuroMed, your trusted partner in managing your healthcare needs conveniently and efficiently. At NeuroMed, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>

            {<br />}
            
            <p className="ml-3 mt-1">

            NeuroMed is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, NeuroMed is here to support you every step of the way.

            </p>

            {<br />}

            <p className="ml-3 mt-1">

            Our Vision

            Our vision at NeuroMed is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
      </div>

      <h1 className="mt-10 font-semibold text-xl mb-4">Why Choose us</h1>

      <div className="flex flex-row w-10/12 justify-between border border-gray-500 ">
        <div className="border border-gray-500 flex flex-col items-center px-6 py-8">
          <h1 className="font-semibold">Efficiency:</h1>
          <p className="mt-2">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border border-gray-500 flex flex-col items-center px-4 py-8">
        <h1 className="font-semibold">Convenience:</h1>
          <p className="mt-2">Access to a network of trusted healthcare professionals in your area.</p>
          
        </div>

        <div className="border border-gray-500 flex flex-col items-center px-4 py-8">
        <h1 className="font-semibold">Personalization:</h1>
        <p className="mt-2">Tailored recommendations and reminders to help you stay on top of your health.</p>
          
        </div>
      </div>
    </div>
  )
}

export default About
