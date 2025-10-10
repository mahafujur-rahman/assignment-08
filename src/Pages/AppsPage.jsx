import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppComponent from "../Components/AppComponent/AppComponent";
import { FaSearch } from "react-icons/fa";
import LoadingError from "../Components/Loading/LoadingError";
import LoadingSpinner from "../Components/Loading/LoadingSpinner";

const AppsPage = () => {
    const { apps, loading, error } = useApps();
    const [searchTerm, setSearchTerm] = useState("");

    if (loading) return <LoadingSpinner/>;
    if (error) return <LoadingError/>;

    // Filter apps based on search term
    const filteredApps = apps.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center my-20">
                <h3 className="text-4xl font-bold">Our All Applications</h3>
                <p className="mt-3">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            {/* Search bar */}
            <div className="mb-5 flex flex-col md:flex-row justify-between items-center gap-3 mx-5 lg:mx-0">
                <p className="text-gray-600">({filteredApps.length} Apps Found)</p>
                <div className="relative w-full md:w-72">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="search"
                        placeholder="Search apps..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
                    />
                </div>
            </div>

            {/* Apps grid */}
            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 lg:mx-0 mb-20">
                    {filteredApps.map((app) => (
                        <AppComponent key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mb-20">No apps found matching your search.</p>
            )}
        </div>
    );
};

export default AppsPage;
