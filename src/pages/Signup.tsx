import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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

    if (!formData.email || !formData.password || !formData.name ) {
      setError("All fields are required");
      return;
    }

    // Simulating API call
    console.log("Signing in...");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-row ">
      <div className="bg-white p-8 rounded-lg shadow-lg px-4 w-6/12 h-full flex flex-col jusity-center">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create Account
        </h2>
        <h2 className="font-light mt-2 mb-5 text-center">Please signup to continue </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
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
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          {"Don't have an account?"}
          <button
            className="text-blue-500 ml-1 hover:underline"
            onClick={() => navigate("/login")}
          >
            Sign up
          </button>
        </p>
      </div>
      <div className="w-4/12 h-full">
        <img className="w-full h-full object-cover" src={assets.patient} alt="Patient" />
      </div>
    </div>
  );
};

export default Signup;
