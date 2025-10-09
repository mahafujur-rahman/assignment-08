import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { FaDownload, FaStar, FaComments } from "react-icons/fa";
import { Link } from "react-router";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { saveInstalledApp } from "../Utility/installedLocal";

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error)
        return (
            <p className="text-center mt-10 text-red-500">
                Error loading data!
            </p>
        );

    const app = apps.find((item) => item.id === parseInt(id));

    if (!app) {
        return (
            <p className="text-center mt-10 text-gray-500">App not found!</p>
        );
    }

    function onclickHandler(){
        saveInstalledApp(app.id)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 my-10">
            {/* top section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-6 md:p-10">
                <div className=" bg-white  p-5 ">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-48 h-48 object-contain"
                    />
                </div>

                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                        {app.title}
                    </h3>
                    <p className="text-gray-500">
                        Developed by{" "}
                        <span className="text-violet-600 font-medium">
                            {app.companyName}
                        </span>
                    </p>

                    <hr className="border-gray-200 my-4" />

                    <div className="flex flex-wrap gap-8 md:gap-16 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <FaDownload className="text-green-500 text-2xl" />
                            <div>
                                <p className="text-sm text-gray-500">
                                    Downloads
                                </p>
                                <p className="text-xl md:text-2xl font-semibold text-gray-900">
                                    {app.downloads}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaStar className="text-yellow-400 text-2xl" />
                            <div>
                                <p className="text-sm text-gray-500">
                                    Average Ratings
                                </p>
                                <p className="text-xl md:text-2xl font-semibold text-gray-900">
                                    {app.ratingAvg}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaComments className="text-purple-500 text-2xl" />
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Reviews
                                </p>
                                <p className="text-xl md:text-2xl font-semibold text-gray-900">
                                    {app.reviews}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link onClick={onclickHandler} className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                        Install Now ({app.size  || "0"} MB)
                    </Link>
                </div>
            </div>

            {/* Rating Chart*/}
            <hr className="border-gray-300 my-4" />

            {app.ratings && (
                <div className="bg-gray-50 border-gray-200 p-6 mt-10">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                        Ratings
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            layout="vertical"
                            data={app.ratings}
                            margin={{ top: 10, right: 20, left: 30, bottom: 10 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis type="number" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tick={{ fontSize: 14, fill: "#4b5563" }}
                            />
                            <Tooltip
                                cursor={{ fill: "#f3f4f6" }}
                                formatter={(value) => [`${value} ratings`, "Count"]}
                            />
                            <Bar
                                dataKey="count"
                                fill="#ff8c00"
                                barSize={20}
                                radius={[4, 4, 4, 4]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
            <hr className="border-gray-300 my-10" />

            <div className="">
                <h3 className="text-2xl font-semibold">Description</h3>

                <p className="mt-4">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
