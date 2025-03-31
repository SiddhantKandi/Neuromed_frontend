import { useState } from "react";

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    setMessage("");
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setMessage("Thank you for subscribing! 🎉");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-md mt-20 bg-white">
      <h2 className="text-lg font-semibold mb-2 text-center">Subscribe to Our Newsletter</h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Get the latest updates straight to your inbox.
      </p>

      <div className="flex flex-col gap-3">
        <input
          type="email"
          className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
          onClick={handleSubscribe}
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {error && <p className="text-sm mt-2 text-red-500 text-center">{error}</p>}
      {message && <p className="text-sm mt-2 text-green-600 text-center">{message}</p>}
    </div>
  );
};

export default SubscribeNewsletter;

