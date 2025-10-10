import React from "react";

import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
const InstallationCart = ({ app, onUninstall }) => {

  

  const { image, title, companyName, size, downloads, ratingAvg } = app;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto bg-white rounded-2xl p-6 md:p-3 shadow-lg hover:shadow-2xl transition-shadow my-5 gap-6">
      {/*  Image */}

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full md:w-auto">
        {/* App Image */}
        <img
          src={image}
          alt="App"
          className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-xl object-cover shadow-md"
        />

        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            {title}: <span> {companyName}</span>
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-2 text-sm md:text-base">
            {/* Downloads */}
            <div className="flex items-center gap-2">
              <img src={downloadIcon} alt="Downloads" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">{downloads}</span>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <img src={ratingIcon} alt="Ratings" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">{ratingAvg}</span>
            </div>

            {/* Size */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold flex items-center gap-1">
                <span className="text-lg">{size}</span>
                <span className="text-sm text-gray-500 font-medium">MB</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <button 
        onClick={ onUninstall}
        className="bg-[#00D390] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-auto">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallationCart;
