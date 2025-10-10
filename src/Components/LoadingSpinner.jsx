import React from 'react';
import LoadingSpinnerIMG from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-160px)] gap-6">
     
      <img
        src={LoadingSpinnerIMG}
        alt="Loading..."
        className="h-40 w-40 md:h-52 md:w-52 animate-spin"
      />

    
      <h1 className="text-lg md:text-xl font-semibold text-gray-700">
        Please wait, <span className="text-[#753DE7]">loading your apps...</span>
      </h1>
    </div>
  );
};

export default LoadingSpinner;
