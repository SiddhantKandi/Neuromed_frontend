import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    console.log("Logging in...");
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 md:py-">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-6/12 max-w-md md:py-8 lg:py-14">
        <h2 className="text-2xl font-bold text-center mb-2 md:mb-4">
          Login to Your Account
        </h2>
        <h2 className="font-light mt-2 mb-3 md:mb-5 text-center">
          Please login to schedule an appointment
        </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          {"Don't have an account?"}
          <button
            className="text-blue-500 ml-1 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </p>
      </div>
      <img
        className="w-full md:w-4/12 max-w-xs md:max-w-sm mt-6 md:mt-0 sm:block hidden shadow-lg"
        src={assets.patient}
        alt="Patient"
      />
    </div>
  );
};

export default Login;
