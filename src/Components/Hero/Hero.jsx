import React from "react";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import hero from "../../assets/hero.png";
const Hero = () => {
    return (
        <>
            <div className="mt-20 max-w-6xl mx-auto">
                <div className="flex flex-col justify-center items-center text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold">
                        We Build <br />{" "}
                        <span className="text-violet-700">Productive</span> Apps
                    </h1>
                    <p>
                        At HERO.IO, we craft innovative apps designed to make
                        everyday life simpler, smarter, and more exciting.Our
                        goal is to turn your ideas into digital experiences that
                        truly make an impact.
                    </p>

                    <div className="flex gap-3">
                        <button className="btn">
                            {" "}
                            <span>
                                <img
                                    className="h-[20px] w-[20px]"
                                    src={playStore}
                                />
                            </span>{" "}
                            Google Play
                        </button>
                        <button className="btn">
                            {" "}
                            <span>
                                <img
                                    className="h-[20px] w-[20px]"
                                    src={appStore}
                                />
                            </span>{" "}
                            App Sore
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center my-20">
                <div className="flex justify-center items-center">
                    <img className="w-[500px]" src={hero} alt="" />
                </div>
                <div className="bg-gradient-to-tl from-violet-400 to-violet-800 md:px-18 md:py-10 text-white">
                    <h3 className="mb-5 text-2xl font-semibold">Trusted by Millions, Built for You</h3>
                    <div className="flex justify-around items-center">
                        <div>
                            <p className="text-sm">Total Downloads</p>
                            <h3 className="text-3xl font-bold my-3">29.6M</h3>
                            <p className="text-sm">21% more than last month</p>
                        </div>
                        <div>
                            <p className="text-sm">Total Downloads</p>
                            <h3 className="text-3xl font-bold my-3">29.6M</h3>
                            <p className="text-sm">21% more than last month</p>
                        </div>
                        <div>
                            <p className="text-sm">Total Downloads</p>
                            <h3 className="text-3xl font-bold my-3">29.6M</h3>
                            <p className="text-sm">21% more than last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
