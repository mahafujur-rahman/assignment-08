import React from "react";
import useApps from "../Hooks/useApps";
import AppComponent from "../Components/AppComponent/AppComponent";

const AppsPage = () => {
    const { apps, loading, error } = useApps();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data!</p>;

    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {apps.map((app) => (
                    <AppComponent key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default AppsPage;
