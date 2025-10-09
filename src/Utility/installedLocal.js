const STORAGE_KEY = "installedApps";

// Get
export const getInstalledApps = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    } else {
        return [];
    }
};

// Set
export const saveInstalledApp = (appId) => {
    let existing = getInstalledApps();

    let found = false;
    for (let i = 0; i < existing.length; i++) {
        if (existing[i] === appId) {
            found = true;
            break;
        }
    }

    if (!found) {
        existing.push(appId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
};

// Delete 
export const deleteInstalledApp = (appId) => {
    const existing = getInstalledApps();
    const updated = [];

    for (let i = 0; i < existing.length; i++) {
        if (existing[i] !== appId) {
            updated.push(existing[i]);
        }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
