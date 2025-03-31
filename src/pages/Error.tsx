import { BiError } from "react-icons/bi";

const ErrorPage = () => {
    const errorCode = "404";
    const errorMessage = "Page Not Found";
    const errorDescription =
        "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
                <div className="mb-6">
                    <BiError className="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-red-500 animate-bounce" aria-hidden="true" />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Error {errorCode}
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4">
                    {errorMessage}
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed sm:leading-loose max-w-md mx-auto">
                    {errorDescription}
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
