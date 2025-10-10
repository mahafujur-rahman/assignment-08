import React from "react";
import { Link } from "react-router";
import appError from "../../assets/App-Error.png";

const AppNotFound = () => {


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
        The app you’re looking for couldn’t be found in our system. Please try
        searching for another app or go back to the previous page.
      </p>
      <Link
        to="/"
        className="btn bg-gradient-to-tl from-violet-500 to-violet-800 text-white px-8"
      >
        Go Home
      </Link>
    </div>
  );
};

export default AppNotFound;
