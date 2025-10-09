import React from "react";
import useApps from "../Hooks/useApps";
import { getInstalledApps } from "../Utility/installedLocal";
import InstalledApp from "../Components/InstalledApp/InstalledApp";

const InstallationPage = () => {
    const { apps, loading, error } = useApps();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading apps</p>;

    let installedApps = [];

    const installedIds = getInstalledApps();
    installedApps = apps.filter((app) => installedIds.includes(app.id));

    return (
        <div>
            {installedApps.length > 0 ? (
                installedApps.map((app) => (
                    <InstalledApp key={app.id} app={app} />
                ))
            ) : (
                <p>No installed apps found</p>
            )}
        </div>
    );
};

export default InstallationPage;
