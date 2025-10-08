import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png"; 

const AppDetails = () => {
    const { id } = useParams(); 
    const appId = parseInt(id);
    const appData = useLoaderData(); 

    const singleApp = appData.find(app => app.id === appId);
    
    console.log("id:", id);
    console.log("App Data:", appData);
    console.log("Single App:", singleApp);

    

    const { image, title, companyName, description, size, reviews, downloads, ratings } = singleApp;

    return (


        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start text-left gap-10 p-6 md:p-10">
  
  {/* Image Section */}
  <div className="md:w-1/3 w-full flex justify-center md:justify-start">
    <img 
      src={image} 
      alt={title} 
      className="rounded-2xl shadow-md w-[220px] h-[220px] md:w-[250px] md:h-[250px] object-cover" 
    />
  </div>

  {/* Content Section */}
  <div className="md:w-2/3 w-full space-y-4 mt-6 md:mt-0">

    {/* Title + Developer */}
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        {title}: <span className="font-normal text-gray-600">{companyName}</span>
      </h1>
      <h3 className="text-gray-500 text-base md:text-lg mt-1">
        Developed by <span className="font-semibold text-[#00D390]">productive.io</span>
      </h3>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {/* Downloads */}
      <div className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-sm w-full">
        <img src={downloadIcon} alt="Downloads" className="w-7 mb-1" />
        <h3 className="text-sm font-medium text-gray-600">Downloads</h3>
        <h4 className="font-bold text-xl md:text-2xl text-gray-800">
          {downloads.toLocaleString()}
        </h4>
      </div>

      {/* Ratings */}
      <div className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-sm w-full">
        <img src={ratingIcon} alt="Ratings" className="w-7 mb-1" />
        <h3 className="text-sm font-medium text-gray-600">Ratings</h3>
        <h4 className="font-bold text-xl md:text-2xl text-gray-800">
          {ratings.length}
        </h4>
      </div>

      {/* Reviews */}
      <div className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-sm w-full md:col-span-1 col-span-2 md:col-auto">
        <img src={reviewIcon} alt="Reviews" className="w-7 mb-1" />
        <h3 className="text-sm font-medium text-gray-600">Reviews</h3>
        <h4 className="font-bold text-xl md:text-2xl text-gray-800">
          {reviews.toLocaleString()}
        </h4>
      </div>
    </div>

    {/* Install Button */}
    <button className="bg-[#14d396] text-white font-semibold px-8 py-3 rounded-xl mt-6 hover:bg-[#00b87c] transition w-full md:w-auto shadow-sm">
      Install Now ({size} MB)
    </button>

    {/* Description */}
    <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">
      {description}
    </p>
  </div>
</div>


    );
};

export default AppDetails;
