import React from "react";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router";

const AppNotInstall = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <div className=" max-w-md w-full">

                <CiWarning className="text-yellow-500 mx-auto mb-4 text-[150px]" />

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    No Installed Apps
                </h2>
                <p className="text-gray-600 mb-6">
                    It looks like you haven’t installed any apps yet.
                </p>
                <Link
                    to="/apps"
                    className="btn bg-gradient-to-tl from-violet-500 to-violet-800 text-white px-8 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-violet-900 transition-all"
                >
                    Browse Apps
                </Link>
            </div>
        </div>
    );
};

export default AppNotInstall;
