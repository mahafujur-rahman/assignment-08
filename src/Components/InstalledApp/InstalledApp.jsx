import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";




const InstalledApp = ({ app, onUninstall }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center border border-gray-200 bg-white rounded-2xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-all duration-200 mb-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="border border-violet-200 p-2 rounded-xl">
                    <img
                        className="h-12 w-12 sm:h-14 sm:w-14 object-cover"
                        src={app.image}
                        alt={app.title}
                    />
                </div>
                <div className="flex flex-col">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                        {app.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                        <p className="badge badge-soft badge-success">
                            <MdOutlineFileDownload /> {app.downloads} downloads
                        </p>
                        <p className="badge badge-soft badge-warning">
                            <FaStar />
                            {app.ratingAvg}
                        </p>
                        <p>
                            {app.size} MB</p>
                    </div>
                </div>
            </div>

            <button
                onClick={() => onUninstall(app.id)}
                className="btn btn-success text-white"
            >
                Uninstall
            </button>
        </div>
    );
};

export default InstalledApp;
