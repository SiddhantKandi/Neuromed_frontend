import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

function SpecialityMenu() {
  return (
    <div className="flex flex-col items-center mt-10 px-4 md:px-10 lg:px-20" id="speciality">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">Find by Speciality</h2>
      <p className="mt-2 text-sm sm:text-lg text-center">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      {/* Grid Layout for Responsive Display */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6 mb-6 w-full max-w-5xl">
        {specialityData.map((data, index) => (
          <Link
            key={index}
            to={`/doctors/${data.speciality}`}
            className="flex flex-col items-center text-xs hover:cursor-pointer transition-transform hover:translate-y-1 duration-300"
            onClick={() => scrollTo(0, 0)}
          >
            <img className="w-20 sm:w-24 lg:w-28 mb-2" src={data.image} alt={data.speciality} />
            <p className="text-sm sm:text-base text-center">{data.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;

