import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router";

const AppComponent = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app;

    return (
        <Link to={`apps-details/${id}`}>
            <div className="border p-5 bg-white border-gray-200 shadow-md rounded-xl space-y-4 hover:shadow-lg transition ">
                <div className="border border-violet-200 p-3 rounded-lg flex items-center justify-center ">
                    <img
                        src={image}
                        alt={title}
                        className="h-32 w-32 object-contain"
                    />
                </div>

                <p className="text-base font-semibold text-gray-800">{title}</p>

                <div className="flex justify-between items-center text-sm font-medium">
                    <div className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded-full">
                        <GoDownload className="text-lg" /> {downloads}
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full">
                        <MdOutlineStar className="text-lg" /> {ratingAvg}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppComponent;
