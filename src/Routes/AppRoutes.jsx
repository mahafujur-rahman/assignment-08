import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import BaseLayout from '../Layouts/BaseLayout';
import HomePage from "../Pages/HomePage"
import AppsPage from '../Pages/AppsPage';
import InstallationPage from '../Pages/InstallationPage';
export const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,

        children: [
            {index: true, Component: HomePage},
            {path: "/apps", Component: AppsPage},
            {path: "/installation", Component: InstallationPage}
        ]
    }
])

