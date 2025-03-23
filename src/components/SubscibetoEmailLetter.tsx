import { useState } from "react";

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 border rounded-lg shadow-md mt-20">
      <h2 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h2>
      <p className="text-sm text-gray-600 mb-4">Get the latest updates straight to your inbox.</p>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      {message && <p className="text-sm mt-2 text-gray-700">{message}</p>}
    </div>
  );
};

export default SubscribeNewsletter;
