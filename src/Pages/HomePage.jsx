import React from "react";
import Hero from "../Components/Hero/Hero";
import AppComponent from "../Components/AppComponent/AppComponent";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import LoadingError from "../Components/Loading/LoadingError";
import LoadingSpinner from "../Components/Loading/LoadingSpinner";

const Home = () => {
    const { apps, loading, error } = useApps();

    if (loading) return <LoadingSpinner />;
    if (error) return <LoadingError />;

    return (
        <div>
            <Hero />

            <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#001931]">
                    Trending Apps
                </h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore all trending apps on the market developed by us.
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-10">
                <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-5 mx-5 lg:mx-0  mt-20">
                    {apps
                        .slice(-8)
                        .reverse()
                        .map((app) => (
                            <AppComponent key={app.id} app={app} />
                        ))}
                </div>

                <div className="flex justify-center items-center mb-20">
                    <Link
                        to="/apps"
                        className="btn bg-gradient-to-tl from-violet-500 to-violet-800 text-white px-10"
                    >
                        <span>Show All</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
