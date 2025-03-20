import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectDoctorById,RootState } from "../features/doctorSlice";
import { assets } from "../assets/assets_frontend/assets";
import CustomDatePicker from "../components/CustomDatePicker";

function Appointments() {

  const { docId } = useParams<{ docId: string }>();

  const doctorId:string = docId ?? "";

  const doctor = useSelector((state : RootState) => selectDoctorById(state,doctorId));




  return (
    <div className="flex flex-col items-center mt-10 mb-10">
        <div className="flex flex-row items-start mb-10">
          {/* Image section */}
          <div className="w-1/3 ml-3 px-2 rounded-lg bg-blue-600 flex items-center">
            <img src={doctor.image} alt="doctor image" className="w-full h-auto mt-8 rounded-lg"/>
          </div>

          {/* Doctor details section */}
          <div className="flex flex-col justify-between mr-4 ml-4 border border-gray-400 rounded-lg px-4 py-4 flex-grow h-full">
            <div>
              <div className="flex flex-row items-center">
                <h1 className="text-2xl font-semibold">{doctor.name}</h1>
                <img className="size-4 ml-2" src={assets.verified_icon} alt="Verified icon"/>
              </div>
              <div className="flex flex-row items-center mt-2">
                <h1>{`${doctor.degree} - ${doctor.speciality}`}</h1>
                <div className="border border-gray-300 rounded-full ml-2">
                  <p className="px-2 py-1 font-extralight">{doctor.experience}</p>
                </div>
              </div>
              <div className="flex flex-row items-center mt-2">
                <h2 className="text-lg">About</h2>
                <img className="ml-2" src={assets.info_icon} alt="Info icon"/>
              </div>
              <p className="font-thin">{doctor.about}</p>
            </div>
            <p className="mt-2">{`Appointment fee : $${doctor.fees}`}</p>
          </div>
        </div>
          <h1 className="mt-2 text-lg ml-2">Booking slots</h1>
          <div className="flex flex-row items-center mt-2">
            <CustomDatePicker/>
          </div>
          <button className="px-4 py-2 rounded-full bg-purple-500 mt-4">Book Appointment</button>
    </div>

  )
}

export default Appointments
