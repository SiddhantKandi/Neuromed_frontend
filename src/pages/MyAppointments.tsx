import { selectAllDoctors } from "../features/doctors/doctorSlice";
import { useAppSelector } from "../app/hooks";

function MyAppointments() {
  const doctors = useAppSelector(selectAllDoctors);

  return (
    <div className="flex flex-col justify-between mt-10 items-start ml-10 mr-10">
      <h1 className="text-lg font-semibold">My Appointments</h1>
      {doctors.slice(0, 3).map((doctor, index) => (
        <div key={index} className="w-full mb-10">
          <hr className="border-t border-gray-300 w-full mt-4 mb-6 mr-2" />
          
          {/* Main Row: Image | Details | Buttons */}
          <div className="flex flex-row justify-between items-center w-full">
            {/* Left: Doctor Image */}
            <img src={doctor.image} alt="doctor image" className="h-40 w-40 bg-indigo-200 pt-3" />

            {/* Center: Doctor Details */}
            <div className="flex flex-1 flex-col ml-5">
              <p className="text-lg font-semibold">{doctor.name}</p>
              <p className="mb-2">{doctor.speciality}</p>
              <div className="flex flex-col">
                <p className="mb-1">Address:</p>
                <p className="font-medium">{doctor.address.line1}</p>
                <p className="font-medium">{doctor.address.line2}</p>
              </div>
              <p className="mt-2">
                <span>Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Right: Buttons (Moved to Right) */}
            <div className="flex flex-col items-end ml-auto w-[220px]">
              <button className="px-6 py-2 sm:min-w-48 w-full bg-indigo-400 rounded-full text-white hover:bg-indigo-500">
                Pay here
              </button>
              <button className="px-6 py-2 sm:min-w-48 w-full rounded-full border border-gray-400 mt-5 hover:bg-red-500">
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>
      ))}
       <hr className="border-t border-gray-300 w-full ml-2 mr-2" />
    </div>
  );
}

export default MyAppointments;

