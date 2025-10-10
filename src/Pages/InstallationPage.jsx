import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import {
    getInstalledApps,
    deleteInstalledApp,
} from "../Utility/installedLocal";
import InstalledApp from "../Components/InstalledApp/InstalledApp";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const InstallationPage = () => {
    const { apps, loading, error } = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    const parseDownloads = (downloads) => {
        if (!downloads) return 0;
        const value = parseFloat(downloads);
        if (downloads.toLowerCase().includes("m")) return value * 1_000_000;
        if (downloads.toLowerCase().includes("k")) return value * 1_000;
        return value; // plain number string like "1000"
    };

    useEffect(() => {
        if (apps && apps.length > 0) {
            const installedIds = getInstalledApps();
            const filtered = apps.filter((app) =>
                installedIds.includes(app.id)
            );
            setInstalledApps(filtered);
        }
    }, [apps]);

    // Uninstall handler
    const handleUninstall = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "This app will be uninstalled from your system!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, uninstall it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteInstalledApp(id);
                setInstalledApps((prev) => prev.filter((app) => app.id !== id));

                MySwal.fire({
                    title: "Uninstalled!",
                    text: "The app has been successfully removed.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            }
        });
    };

    // Sort handler
    const handleSortChange = (order) => {
        setSortOrder(order);
        setInstalledApps((prevApps) => {
            const sorted = [...prevApps].sort((a, b) => {
                const downloadsA = parseDownloads(a.downloads);
                const downloadsB = parseDownloads(b.downloads);
                return order === "high-low"
                    ? downloadsB - downloadsA
                    : downloadsA - downloadsB;
            });
            return sorted;
        });
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error)
        return (
            <p className="text-center mt-10 text-red-500">Error loading apps</p>
        );

    return (
        <div className="max-w-6xl mx-auto p-5 sm:p-8">
            <div className="text-center my-20">
                <h3 className="text-4xl font-bold">Your Installed Apps</h3>
                <p className="mt-3">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Top Filter Row */}
            <div className="mb-5 flex flex-col md:flex-row justify-between items-center gap-3 mx-5 lg:mx-0">
                <p className="text-gray-600">
                    ({installedApps.length} Apps Found)
                </p>

                {/* Sort Dropdown */}
                <div className="relative w-full md:w-72">
                    <select
                        value={sortOrder}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all cursor-pointer"
                    >
                        <option value="">Sort by Downloads</option>
                        <option value="high-low">High → Low</option>
                        <option value="low-high">Low → High</option>
                    </select>

                    {/* Down arrow */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        ▼
                    </span>
                </div>
            </div>

            {/* Installed Apps */}
            {installedApps.length > 0 ? (
                <div className="space-y-4">
                    {installedApps.map((app) => (
                        <InstalledApp
                            key={app.id}
                            app={app}
                            onUninstall={handleUninstall}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No installed apps found
                </p>
            )}
        </div>
    );
};

export default InstallationPage;
