import { useForm } from "react-hook-form";
import { assets } from "../assets/assets_frontend/assets";
import SubscribeNewsletter from "../components/SubscibetoEmailLetter";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 px-4 md:px-8 lg:px-12 gap-8">
        {/* Image Section - Always Visible */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <img
            className="w-full max-w-md rounded-lg"
            src={assets.contact_image}
            alt="Contact"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-7/12 max-w-2xl bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block font-medium">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Subject Field */}
            <div>
              <label className="block font-medium">Subject</label>
              <input
                {...register("subject", { required: "Subject is required" })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 border rounded h-28 focus:ring-2 focus:ring-blue-400"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Newsletter Section */}
      <SubscribeNewsletter />
    </>
  );
}
