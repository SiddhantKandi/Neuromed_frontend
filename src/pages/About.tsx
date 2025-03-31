import { assets } from "../assets/assets_frontend/assets"

function About() {
  return (
    <div className="flex flex-col  items-center px-4 sm:px-10 w-full">
      {/* Image & Text Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10 w-full lg:w-10/12 gap-8 lg:gap-12">
        
        {/* Image Section */}
        <div className="w-full lg:w-4/12 flex justify-center">
          <img 
            src={assets.about_image} 
            alt="About" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="border border-gray-300 w-full lg:w-8/12 rounded-md p-6 text-center lg:text-left">
          <p>
            Welcome to <strong>NeuroMed</strong>, your trusted partner in managing your healthcare needs conveniently and efficiently. At NeuroMed, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>

          <br />

          <p>
            NeuroMed is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, NeuroMed is here to support you every step of the way.
          </p>

          <br />

          <h2 className="font-semibold text-lg">Our Vision</h2>
          <p>
            Our vision at NeuroMed is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <h1 className="mt-10 font-semibold text-xl mb-4">Why Choose Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-10/12 border border-gray-500 p-4">
        {/* Feature 1 */}
        <div className="border border-gray-500 flex flex-col items-center px-6 py-6 rounded-md">
          <h1 className="font-semibold text-lg">Efficiency</h1>
          <p className="mt-2 text-center">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Feature 2 */}
        <div className="border border-gray-500 flex flex-col items-center px-6 py-6 rounded-md">
          <h1 className="font-semibold text-lg">Convenience</h1>
          <p className="mt-2 text-center">Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Feature 3 */}
        <div className="border border-gray-500 flex flex-col items-center px-6 py-6 rounded-md">
          <h1 className="font-semibold text-lg">Personalization</h1>
          <p className="mt-2 text-center">Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
