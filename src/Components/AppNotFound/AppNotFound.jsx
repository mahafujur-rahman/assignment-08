import React from "react";
import { useNavigate } from "react-router";
import appError from "../../assets/App-Error.png";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img
        src={appError}
        alt="App Not Found"
        className="w-64 sm:w-80 md:w-96 mb-6"
      />
      <h3 className="text-3xl font-bold text-gray-800 mb-2">
        Oops!! App Not Found
      </h3>
      <p className="text-gray-600 max-w-md mb-6">
        The App you are requesting is not found on our system. Please try another app.
      </p>
      <button
        onClick={() => navigate(-1)} 
        className="btn bg-gradient-to-tl from-violet-500 to-violet-800 text-white px-8"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
