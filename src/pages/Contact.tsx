import { useForm } from 'react-hook-form';
import { assets } from '../assets/assets_frontend/assets';
import SubscribeNewsletter from '../components/SubscibetoEmailLetter';

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
  }

  return (
    <>
        <div className='flex flex-row items-center mt-10 justify-center '>
          <div className='mr-5 w-4/12 ml-5 h-full'>
            <img className= "max-w-full ml-10 rounded-lg" src={assets.contact_image} alt="Contact Image"/>
          </div>
          <div className="max-w-2xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md mt-10 w-8/12">
            <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
            <form  className="space-y-4">
              <div>
                <label className="block font-medium">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full p-2 border rounded"
                  />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full p-2 border rounded"
                  />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block font-medium">Subject</label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full p-2 border rounded"
                  />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block font-medium">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="w-full p-2 border rounded h-28"
                  />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={handleSubmit}
                >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <SubscribeNewsletter />
    </>
  );
}
