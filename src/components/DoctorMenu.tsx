import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DoctorMenu() {

    const navigate = useNavigate();

    interface Doctor {
        _id: string;
        image: string;
        name: string;
        speciality: string;
    }

    interface RootState {
       doctor : {
        doctors : Doctor[];
       }
    }

    const doctors: Doctor[] = useSelector((state: RootState) => state.doctor.doctors);

  return (
    <div className="flex flex-col items-center mt-10 mb-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="mt-2 text-lg">Simply browse through our extensive list of trusted doctors.</p>
      <div className="grid grid-cols-5 gap-6 mb-6 mt-6 ml-10 mr-10">
        {doctors.slice(0,10).map((doctor,index) => (
            <div key={index} className="border border-gray-200 rounded-lg hover:shadow-lg transition-transform hover:translate-y-1 duration-300 mb-4 hover:cursor-pointer"
            onClick={()=> navigate(`/appointments/${doctor._id}`)}>
                <img className="bg-indigo-300 rounded-lg" src={doctor.image} alt="doctor image"/>
                <div>
                    <div className="ml-2">
                        <p className="text-green-500 flex flex-row items-center"><GoDotFill className="mr-1"/> Available</p>
                        <p className="text-lg font-semibold mt-2">{doctor.name}</p>
                        <p>{doctor.speciality}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
      <button onClick={() => {navigate('/doctors'); scrollTo(0,0)} } className="bg-gray-200 px-8 py-2 rounded-full text-lg flex flex-row items-center">more <HiOutlineDotsHorizontal className="ml-1"/></button>
    </div>
  )
}

export default DoctorMenu
