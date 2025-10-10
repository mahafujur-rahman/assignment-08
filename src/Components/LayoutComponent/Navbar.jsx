import React from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router";
import "./nav.css"

const Navbar = () => {
    const navLinks = (
        <>
            <li className="text-base text-violet-700 m-2"><NavLink to="/" className="btn btn-ghost">Home</NavLink></li>
            <li className="text-base text-violet-700 m-2"><NavLink to="/apps" className="btn btn-ghost">App</NavLink></li>
            <li className="text-base text-violet-700 m-2"><NavLink to="/installation" className="btn btn-ghost">Installation</NavLink></li>
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/"  className="text-xl font-semibold flex items-center gap-1">
                    {" "}
                    <img className="w-[35px] h-[35px]" src={logo} alt="" />{" "}
                    <span>Hero.IO</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-tl from-violet-500 to-violet-800 text-white" href="https://github.com/mahafujur-rahman" target="_blank">
                    <span className="text-xl "><FaGithub /></span> <span>Contribute</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
