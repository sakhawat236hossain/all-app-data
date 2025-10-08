import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllAppsPageCart from "./AllAppsPageCart";
import { Search } from "lucide-react";

const AllAppsPge = () => {
  const allAppsData = useLoaderData();
 const [search, setSearch] = useState("");
const removeSpach = search.trim().toLowerCase();

const searchApps = removeSpach 
  ? allAppsData.filter(app => app.title.toLowerCase().includes(removeSpach)) 
  : allAppsData;

 console.log(searchApps);
  return (
    <div>

        {/* banner */}
       
      <div className="text-center my-10 space-y-3">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
    Our <span className="text-[#753DE7]">All Applications</span>
  </h1>
  <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
    Explore all the applications developed by our team — crafted with passion, 
    precision, and performance for millions of users worldwide.
  </p>
</div>



{/* app found search bar */}

<div className="flex items-center justify-between mb-4 max-w-[1200px] mx-auto">
  {/* Apps Found */}
<h1 className="text-lg md:text-xl font-bold text-gray-800">
  Apps Found <span className="text-[#753DE7]">({searchApps.length})</span>
</h1>

  {/* Search Bar */}
  <label className="flex items-center gap-2 border rounded px-2 py-1 w-64">
    <Search className="w-5 h-5 text-gray-500" />
    <input
    value={search}
      type="text"
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search apps..."
      className="outline-none flex-1"
    />
  </label>
</div>

{/*data map and pase AllAppsPageCart  */}
          
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-[1300px] mx-auto">
        {searchApps.map((cart,index) => (
          <AllAppsPageCart key={index} cart={cart}></AllAppsPageCart>
        ))}
      </div>
    </div>
  );
};

export default AllAppsPge;
