import { useParams, useNavigate } from "react-router-dom";
import {
  Doctor,
  selectAllDoctors,
  selectDoctorsBySpeciality,
} from "../features/doctors/doctorSlice";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";

function Doctors() {
  const navigate = useNavigate();

  const initialSpeciality = useParams().speciality;
  const [speciality, setSpeciality] = useState(initialSpeciality || "");

  const doctors: Doctor[] = useSelector(selectAllDoctors);

  const filteredDoctor = useSelector(selectDoctorsBySpeciality(speciality));

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
    <div className="flex flex-row">
      <div className="w-1/3 ml-6 items-center ">
        {/*Left Section */}
        <p>Browse through the doctors specialist.</p>
        {doctorSpeciality.map((individualSpeciality, index) => (
          <button
            onClick={() => {
              updateSpeciality(individualSpeciality);
            }}
            className={`border border-gray-400 px-4 py-3 ml-2 mt-4 w-60 text-center items-center flex flex-row rounded-full 
          ${
            individualSpeciality === speciality
              ? "bg-indigo-200"
              : "hover:bg-indigo-400"
          }`}
            key={index}
          >
            {individualSpeciality}
          </button>
        ))}
      </div>

      <div className="w-2/3  mr-10 grid grid-cols-4 gap-6 mb-6 mt-6">
        {/*Right Section */}
        {speciality.length == 0
          ? doctors.slice(0, 10).map((doctor, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg hover:shadow-lg transition-transform hover:translate-y-1 duration-300 mb-4 hover:cursor-pointer"
                onClick={() => {
                  navigate(`/appointments/${doctor._id}`);
                  scrollTo(0, 0);
                }}
              >
                <img
                  className="bg-indigo-300 rounded-lg"
                  src={doctor.image}
                  alt="doctor image"
                />
                <div className="ml-2">
                  <p className="text-green-500 flex flex-row items-center mt-1">
                    <GoDotFill className="mr-1" /> Available
                  </p>
                  <p className="text-lg font-semibold mt-2">{doctor.name}</p>
                  <p>{doctor.speciality}</p>
                </div>
              </div>
            ))
          : filteredDoctor.slice(0, 10).map((doctor, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg hover:shadow-lg transition-transform hover:translate-y-1 duration-300 mb-4 hover:cursor-pointer h-80"
                onClick={() => {
                  navigate(`/appointments/${doctor._id}`);
                  scrollTo(0, 0);
                }}
              >
                <img
                  className="bg-indigo-300 rounded-lg"
                  src={doctor.image}
                  alt="doctor image"
                />
                <div className="ml-2 ">
                  <p className="text-green-500 flex flex-row items-center mt-2">
                    <GoDotFill className="mr-1" /> Available
                  </p>
                  <p className="text-lg font-semibold mt-2">{doctor.name}</p>
                  <p>{doctor.speciality}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Doctors;
