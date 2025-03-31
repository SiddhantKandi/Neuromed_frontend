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
  
 

  const doctorSpeciality:string = doctor.speciality;

  const navigate = useNavigate();

  const filteredDoctor= useAppSelector(selectDifferentDoctorswithSamespeciality(doctorSpeciality,doctorId));

  return (
    <div className="flex items-center flex-col">
    <div className="flex flex-col items-center mt-10 mb-10">
      <div className="flex flex-row items-start mb-10">
        {/* Image section */}
        <div className="w-1/3 ml-3 px-2 rounded-lg bg-blue-600 flex items-center">
          <img
            src={doctor.image}
            alt="doctor image"
            className="w-full h-auto mt-8 rounded-lg"
          />
        </div>

        {/* Doctor details section */}
        <div className="flex flex-col justify-between mr-4 ml-4 border border-gray-400 rounded-lg px-4 py-4 flex-grow h-full">
            <div className="flex flex-row items-center">
              <h1 className="text-2xl font-semibold">{doctor.name}</h1>
              <img
                className="size-4 ml-2"
                src={assets.verified_icon}
                alt="Verified icon"
              />
            </div>
            <div className="flex flex-row items-center mt-2">
              <h1>{`${doctor.degree} - ${doctor.speciality}`}</h1>
              <div className="border border-gray-300 rounded-full ml-2">
                <p className="px-2 py-1 font-extralight">{doctor.experience}</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-2">
              <h2 className="text-lg">About</h2>
              <img className="ml-2" src={assets.info_icon} alt="Info icon" />
            </div>
            <p className="font-thin">{doctor.about}</p>
          <p className="mt-2">{`Appointment fee : $${doctor.fees}`}</p>
        </div>
      </div>
      <h1 className="mt-2 text-lg ml-2">Booking slots</h1>
      <div className="flex flex-row items-center mt-2">
        <CustomDatePicker />
      </div>
      <button className="px-4 py-2 rounded-full bg-purple-500 mt-4">
        Book Appointment
      </button>
      <h1 className="font-semibold text-2xl mt-10">Related doctors</h1>
      <p className="font-light mt-2">
        Simply browse through our extensive list of trusted doctors.
      </p>
    </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,0.1fr))] gap-6 items-center mb-20 w-full ml-10">
    {filteredDoctor.map((doctor, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg hover:shadow-lg transition-transform hover:scale-105 duration-300 hover:cursor-pointer bg-white flex flex-col items-center text-center"
        onClick={() => {
          navigate(`/appointments/${doctor._id}`);
          scrollTo(0, 0);
        }}
      >
        {/* Image Container */}
        <div className="flex justify-center items-center w-full h-[250px]">
          <img
            className="rounded-lg object-contain max-h-full max-w-full bg-blue-600"
            src={doctor.image}
            alt="doctor"
          />
        </div>

        {/* Text Information */}
        <div className=" w-full bg-gray-100 p-3 rounded-b-lg">
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
