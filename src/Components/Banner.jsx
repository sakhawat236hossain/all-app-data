import React from "react";
import BannerImg from "../assets/hero.png";
import AppStore from "../assets/App Store.png";
import GooglePlay from "../assets/Google Play.png";
import { ArrowDownToLine, Star } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-[#D2D2D250]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8 pt-10">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
            Apps
          </h1>
          <p className="text-gray-500 text-[15px] mb-6 max-w-3xl">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex justify-center gap-4 flex-wrap">
              {/* Google Play */}
              <a
                href="https://play.google.com/store/games?device=windows&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#34A853] text-white rounded-lg 
               hover:bg-green-600 transition"
              >
                <img src={GooglePlay} alt="Google Play" className="w-6 h-6" />
                Google Play
              </a>

              {/* App Store */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0070F3] text-white rounded-lg 
               hover:bg-blue-600 transition"
              >
                <img src={AppStore} alt="App Store" className="w-6 h-6" />
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center mb-0">
          <img
            src={BannerImg}
            alt="Hero"
            className="w-full max-w-md h-auto object-contain mb-0"
          />
        </div>
      </div>


     <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-12 px-4">
  <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
    Trusted by Millions, Built for You
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {/* Total Downloads */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg lg:text-xl font-semibold mb-2">Total Downloads</h3>
      <h1 className="text-3xl lg:text-4xl font-bold mb-1 flex items-center gap-2">29.6M <ArrowDownToLine className="w-[35px] h-[35px]"/></h1>
      <h3 className="text-sm lg:text-base">21% more than last month</h3>
    </div>

    {/* Total Reviews */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg lg:text-xl font-semibold mb-2">Total Reviews</h3>
      <h1 className="text-3xl lg:text-4xl font-bold mb-1 flex items-center gap-2">906K <Star className="w-[35px] h-[35px]"/></h1>
      <h3 className="text-sm lg:text-base">46% more than last month</h3>
    </div>

    {/* Active Apps */}
    <div className="flex flex-col items-center">
      <h3 className="text-lg lg:text-xl font-semibold mb-2">Active Apps</h3>
      <h1 className="text-3xl lg:text-4xl font-bold mb-1">132+</h1>
      <h3 className="text-sm lg:text-base">31 more will Launch</h3>
    </div>
  </div>
</div>

    </div>
  );
};

export default Banner;
