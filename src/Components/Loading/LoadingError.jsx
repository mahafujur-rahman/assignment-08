import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const LoadingError = () => {
    return (
        <div className="flex justify-center items-center h-[80vh] bg-gradient-to-b from-violet-50 to-white">
            <div className="text-center bg-white shadow-xl rounded-2xl p-8 border border-violet-200 animate-fadeIn">
                <div className="flex justify-center mb-4">
                    <div className="bg-violet-100 p-4 rounded-full">
                        <BiErrorCircle className="text-violet-600 w-10 h-10 animate-bounce" />
                    </div>
                </div>
                <h2 className="text-2xl font-semibold text-violet-700 mb-2">
                    Oops! Something Went Wrong
                </h2>
                <p className="text-gray-600">
                    We couldn’t load your apps right now. Please try again later.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-md transition-all duration-300"
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default LoadingError;
