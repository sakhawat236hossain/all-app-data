import React from "react";
import App from "../../App";
import CartApp from "./CartApp";


const Apps = ( {appData}) => {
  // console.log(appData);
  return (
    <div>
     <div className="text-center my-8">
  <h1 className="text-3xl font-bold text-gray-900 mb-2">
    Trending Apps
  </h1>
  <p className="text-gray-400 text-sm md:text-base">
    Explore all trending apps on the market developed by us
  </p>
</div>

     
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-[1300px] mx-auto">
        {appData.map((singleApp) => (
        <CartApp singleApp={singleApp} key={singleApp.id}></CartApp>
      ))}
      </div>
    </div>
  );
};

export default Apps;
