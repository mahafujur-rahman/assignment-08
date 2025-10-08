import React from 'react';
import { Outlet } from 'react-router';
import Navbar from "../Components/LayoutComponent/Navbar"
import Footer from "../Components/LayoutComponent/Footer"
import "../index.css"

const BaseLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className='flex-1'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default BaseLayout;