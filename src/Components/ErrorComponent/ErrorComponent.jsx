import React from 'react';
import Footer from '../LayoutComponent/Footer';
import Navbar from '../LayoutComponent/Navbar';
import errorImage  from "../../assets/error-404.png" 
import { Link } from 'react-router';

const ErrorComponent = () => {
    return (
        <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex-1 bg-[#f5f5f5]'>
            <div className='flex justify-center items-center my-10'>
                <img src={errorImage} alt="" />
            </div>
            <div className='mb-10 flex-col justify-center items-center text-center space-y-4'>
                <h3 className='text-4xl font-bold'>Oops, page not found!</h3>
                <p>The page you are looking for is not available.</p>
                <Link to="/" className='btn bg-gradient-to-tl from-violet-500 to-violet-800 text-white px-8'>Go Back!</Link>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default ErrorComponent;