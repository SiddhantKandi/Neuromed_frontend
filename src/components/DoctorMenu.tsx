import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Doctor, selectAllDoctors } from "../features/doctors/doctorSlice";

function DoctorMenu() {
  const navigate = useNavigate();
  const doctors: Doctor[] = useAppSelector(selectAllDoctors);

  return (
    <div className="flex flex-col items-center mt-10 mb-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center">
        Top Doctors to Book
      </h1>
      <p className="mt-2 text-sm sm:text-lg text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-6xl">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
          key={index}
          className="border border-gray-200 rounded-lg hover:shadow-lg transition-transform hover:translate-y-1 duration-300 cursor-pointer p-4 overflow-hidden"
          onClick={() => {
            navigate(`/appointments/${doctor._id}`);
            scrollTo(0, 0);
          }}
        >
          {/* Fixed Image Scaling */}
          <img
            className="w-full h-40 md:h-48 lg:h-56 object-contain rounded-lg bg-indigo-300"
            src={doctor.image}
            alt="Doctor"
          />
          <div className="mt-3">
            <p className="text-green-500 flex items-center">
              <GoDotFill className="mr-1" /> Available
            </p>
            <p className="text-lg font-semibold mt-2">{doctor.name}</p>
            <p className="text-gray-600">{doctor.speciality}</p>
          </div>
        </div>
        
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="mt-6 bg-gray-200 px-6 py-2 rounded-full text-lg flex items-center hover:bg-gray-300 transition"
      >
        More <HiOutlineDotsHorizontal className="ml-2" />
      </button>
    </div>
  );
}

export default DoctorMenu;
