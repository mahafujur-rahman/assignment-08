import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[60vh] space-y-4">
            <FaSpinner className="text-violet-600 text-6xl animate-spin" />

            <p className="text-violet-700 text-xl font-semibold tracking-wide animate-pulse">
                Data Loading...
            </p>
        </div>
    );
};

export default LoadingSpinner;
