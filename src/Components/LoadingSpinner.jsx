import React from 'react';
import LoadingSpinnerIMG from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-160px)]">
      <img
        src={LoadingSpinnerIMG}
        alt="Loading..."
        className="h-40 w-40 md:h-52 md:w-52 animate-spin"
      />
    </div>
  );
};

export default LoadingSpinner;
