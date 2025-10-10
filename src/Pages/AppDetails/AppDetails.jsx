import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png"; 
import { toast, ToastContainer } from 'react-toastify';
import AppDetailsError from '../ErrorPage/AppDetailsError';
import { getStoredApps, addToStoredDA } from '../Utility/AddToLocalStorage';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import useInstalledApps from '../../Hook/useInstalledApps'; 

const AppDetails = () => {
  const { id } = useParams(); 
  const appId = parseInt(id);

  const { installedApps, loading, error } = useInstalledApps();

  const singleApp = installedApps.find(app => app.id === appId);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!singleApp) return;
    const storedApps = getStoredApps();
    const isInstalled = storedApps.some(a => a.id === appId);
    setInstalled(isInstalled);
  }, [singleApp, appId]);

  const handleInstallBtnAddLOcalStorage = (app) => {
    addToStoredDA(app);
    setInstalled(true);
    toast(" App installed successfully!");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading app data.</p>;
  if (!singleApp) return <AppDetailsError />;
// ditakture
  const { image, title, companyName, description, size, reviews, downloads, ratings } = singleApp;

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start text-left gap-10 p-6 md:p-10">
      {/* img */}
      <div className="md:w-1/3 w-full flex justify-center md:justify-start">
        <img src={image} alt={title} className="rounded-2xl shadow-md w-[220px] h-[220px] md:w-[250px] md:h-[250px] object-cover" />
      </div>

      <div className="md:w-2/3 w-full space-y-4 mt-6 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}: <span className="font-normal text-gray-600">{companyName}</span></h1>
        <h3 className="text-gray-500 text-base md:text-lg mt-1">Developed by <span className="font-semibold text-[#00D390]">productive.io</span></h3>
{/* Downloads */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-sm w-full">
            <img src={downloadIcon} alt="Downloads" className="w-7 mb-1" />
            <h3 className="text-sm font-medium text-gray-600">Downloads</h3>
            <h4 className="font-bold text-xl md:text-2xl text-gray-800">{downloads.toLocaleString()}</h4>
          </div>
{/* rating */}
          <div className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-sm w-full">
            <img src={ratingIcon} alt="Ratings" className="w-7 mb-1" />
            <h3 className="text-sm font-medium text-gray-600">Ratings</h3>
            <h4 className="font-bold text-xl md:text-2xl text-gray-800">{ratings.length}</h4>
          </div>
            {/* Reviews */}
          <div className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-sm w-full md:col-span-1 col-span-2 md:col-auto">
            <img src={reviewIcon} alt="Reviews" className="w-7 mb-1" />
            <h3 className="text-sm font-medium text-gray-600">Reviews</h3>
            <h4 className="font-bold text-xl md:text-2xl text-gray-800">{reviews.toLocaleString()}</h4>
          </div>
        </div>
{/* button */}
        <button
          onClick={() => handleInstallBtnAddLOcalStorage(singleApp)}
          disabled={installed}
          className={`px-8 py-3 rounded-xl font-semibold w-full md:w-auto transition-all ${
            installed ? 'bg-[#00D390] text-white cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00b87c] text-white'
          }`}
        >
          {installed ? "Installed" : `Install Now (${size} MB)`}
        </button>
               {/* bar chart */}
       <div className="mt-6 h-64 md:h-80 p-2 rounded-xl shadow-sm mb-7 bg-white">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={ratings}>
  <XAxis type="number" />
  <YAxis type="category" dataKey="name" />
  <Tooltip />
  <Bar dataKey="count" fill="#FF8811" />
</BarChart>
      </ResponsiveContainer>
    </div>

        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-3">Description</h1>
        <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">{description}</p>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default AppDetails;
