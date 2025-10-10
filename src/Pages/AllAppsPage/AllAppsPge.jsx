import React, { useState } from "react";
import { Link } from "react-router";
import AllAppsPageCart from "./AllAppsPageCart";
import { Search } from "lucide-react";
import useInstalledApps from "../../Hook/useInstalledApps";
import LoadingSpinner from "../../Components/LoadingSpinner";

const AllAppsPge = () => {
  // useInstalledApps hook call
  const { installedApps,loading,error } = useInstalledApps(); 

  const [search, setSearch] = useState("");
  const removeSpach = search.trim().toLowerCase();

  const searchApps = removeSpach 
    ? installedApps.filter(app => app.title.toLowerCase().includes(removeSpach)) 
    : installedApps;
      if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p>Error loading apps</p>;

  return (
    <div>
      {/* banner */}
     <div className="text-center my-8 md:my-12 px-4 md:px-0 space-y-2 md:space-y-3">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
    Our <span className="text-[#753DE7]">All Applications</span>
  </h1>
  <p className="text-gray-600 max-w-full sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
    Explore all the applications developed by our team — crafted with passion, 
    precision, and performance for millions of users worldwide.
  </p>
</div>


      {/* app found search bar */}
    <div className="flex flex-col sm:flex-row items-center justify-between mb-4 max-w-[1200px] mx-auto gap-4 sm:gap-0">
  {/* Apps Found */}
  <h1 className="text-lg md:text-xl font-bold text-gray-800">
    Apps Found <span className="text-[#753DE7]">({searchApps.length})</span>
  </h1>

  {/* Search Bar */}
  <label className="flex items-center gap-2 border rounded px-2 py-1 w-50% sm:w-64">
    <Search className="w-5 h-5 text-gray-500" />
    <input
      value={search}
      type="text"
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search apps..."
      className="outline-none flex-1"
    />
  </label>
</div>


      {/* data map and pase AllAppsPageCart */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-[1300px] mx-auto">
        {searchApps.map((cart, index) => (
          <AllAppsPageCart key={index} cart={cart} />
        ))}
      </div>

      {/* no app found */}
      {searchApps.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 gap-4 bg-gray-100 p-10 rounded-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
            No Apps Found
          </h1>
          <Link
            to="/all-apps-page"
            className="btn btn-active btn-primary px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Show All Apps
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllAppsPge;
