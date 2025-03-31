import { useParams, useNavigate } from "react-router-dom";
import {
  Doctor,
  selectAllDoctors,
  selectDoctorsBySpeciality,
} from "../features/doctors/doctorSlice";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { useAppSelector } from "../app/hooks";

function Doctors() {
  const navigate = useNavigate();
  const initialSpeciality = useParams().speciality;
  const [speciality, setSpeciality] = useState(initialSpeciality || "");

  const doctors: Doctor[] = useAppSelector(selectAllDoctors);
  const filteredDoctor = useAppSelector(selectDoctorsBySpeciality(speciality));

  const doctorSpeciality: Array<string> = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const updateSpeciality = (newSpeciality: string) => {
    setSpeciality(newSpeciality);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="lg:w-1/3 w-full p-6">
        <p className="text-lg font-semibold mb-4">Browse through the doctor specialists:</p>
        <div className="flex flex-wrap lg:flex-col gap-4">
          {doctorSpeciality.map((individualSpeciality, index) => (
            <button
              key={index}
              onClick={() => updateSpeciality(individualSpeciality)}
              className={`border border-gray-400 px-4 py-2 rounded-full text-center w-full sm:w-60 
                ${
                  individualSpeciality === speciality
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-indigo-200"
                }`}
            >
              {individualSpeciality}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(speciality.length === 0 ? doctors : filteredDoctor).slice(0, 10).map((doctor, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg hover:shadow-lg transition-transform hover:translate-y-1 duration-300 cursor-pointer"
            onClick={() => {
              navigate(`/appointments/${doctor._id}`);
              scrollTo(0, 0);
            }}
          >
            <img
            className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-lg bg-indigo-300"
            src={doctor.image}
            alt="Doctor"
          />

            <div className="p-4">
              <p className="text-green-500 flex items-center">
                <GoDotFill className="mr-1" /> Available
              </p>
              <p className="text-lg font-semibold mt-2">{doctor.name}</p>
              <p className="text-gray-600">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;

