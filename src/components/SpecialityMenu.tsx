import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

function SpecialityMenu() {
  return (
    <div className="flex flex-col items-center mt-10" id="speciality">
      <h2 className="text-3xl font-semibold">Find by Speciality</h2>
      <p className="mt-2 text-lg">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div className="flex flex-row mt-6 mb-6">
        {specialityData.map((data, index) => (
          <Link
            key={index}
            to={`/doctors/${data.speciality}`}
            className="mr-3 items-center flex flex-col text-xs hover:cursor-pointer transition-transform hover:translate-y-1 duration-300 flex-shrink-0 relative"
            onClick={()=> scrollTo(0,0)}
          >
            <img
              className="w-16 sm:w-24 mb-2"
              src={data.image}
              alt={data.speciality}
            />
            <p className="text-sm">{data.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
