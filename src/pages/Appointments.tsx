import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectDoctorById } from "../features/doctors/doctorSlice";
import { assets } from "../assets/assets_frontend/assets";
import CustomDatePicker from "../components/CustomDatePicker";
import { selectDifferentDoctorswithSamespeciality } from "../features/doctors/doctorSlice";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { RootState } from "../app/store";

function Appointments() {
  const { docId } = useParams<{ docId: string }>();
  const doctorId: string = docId ?? "";
  const doctor = useAppSelector((state: RootState) =>
    selectDoctorById(state, doctorId)
  );
  
  const doctorSpeciality: string = doctor.speciality;
  const navigate = useNavigate();
  const filteredDoctor = useAppSelector(
    selectDifferentDoctorswithSamespeciality(doctorSpeciality, doctorId)
  );

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-12">
      {/* Doctor Info Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10 mb-10 w-full max-w-5xl">
        <div className="w-full lg:w-1/3 flex justify-center lg:mr-4">
          <img
            src={doctor.image}
            alt="doctor"
            className="w-full max-w-[300px] sm:max-w-xs md:max-w-sm lg:max-w-2/3 xl:max-w-lg rounded-lg bg-indigo-400"
          />
        </div>


        {/* Doctor details section */}
        <div className=" lg:pt-10 lg:pb-10 flex flex-col border border-gray-400 rounded-lg px-6 py-4 w-full lg:w-2/3 mt-6 lg:mt-0">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">{doctor.name}</h1>
            <img className="size-4 ml-2" src={assets.verified_icon} alt="Verified icon" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
            <h1>{`${doctor.degree} - ${doctor.speciality}`}</h1>
            <div className="border border-gray-300 rounded-full px-2 py-1 ml-0 sm:ml-2 mt-2 sm:mt-0">
              <p className="text-sm">{doctor.experience}</p>
            </div>
          </div>
          <h2 className="text-lg mt-4">About</h2>
          <p className="font-thin">{doctor.about}</p>
          <p className="mt-2 font-medium">Appointment fee: <span className="text-indigo-600">${doctor.fees}</span></p>
        </div>
      </div>

      {/* Booking Section */}
      <h1 className="mt-2 text-lg">Booking slots</h1>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <CustomDatePicker />
      </div>
      <button className="px-6 py-2 rounded-full bg-purple-500 mt-4 text-white hover:bg-purple-700 transition">
        Book Appointment
      </button>

      {/* Related Doctors Section */}
      <h1 className="font-semibold text-2xl mt-10">Related Doctors</h1>
      <p className="font-light mt-2 text-center">
        Browse through our extensive list of trusted doctors.
      </p>

      {/* Related Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center mb-20 w-full max-w-6xl mt-6">
        {filteredDoctor.map((doctor, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg hover:shadow-lg transition-transform hover:scale-105 duration-300 cursor-pointer bg-white flex flex-col items-center text-center"
            onClick={() => {
              navigate(`/appointments/${doctor._id}`);
              scrollTo(0, 0);
            }}
          >
            {/* Image - Fully Responsive */}
              <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 flex justify-center items-center bg-blue-600 rounded-t-lg">
                <img
                  className="rounded-lg object-contain w-full h-full max-h-80 sm:max-h-96 md:max-h-[400px] bg-indigo-400"
                  src={doctor.image}
                  alt="Doctor"
                />
              </div>


            {/* Doctor Info */}
            <div className="w-full bg-gray-100 p-3 rounded-b-lg">
              <p className="text-green-500 flex items-center justify-center text-sm">
                <GoDotFill className="mr-1" /> Available
              </p>
              <p className="text-lg font-semibold mt-2">{doctor.name}</p>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;
