import React, { useEffect, useState } from "react";
import InstallationCart from "./installationCart";


const Installation = () => {
  const [installation, setInstallation] = useState([]);

  const [sortApps,setSortApps] =useState('none')
// get data local storage
  useEffect(() => {
    const installationAppSaved = JSON.parse(localStorage.getItem("installed"));
    if (installationAppSaved) {
      setInstallation(installationAppSaved);
    }
  }, []);

// Uninstall function
const handleUninstall = (appId) => {
    
    const updatedApps = installation.filter(app => app.id !== appId);
    setInstallation(updatedApps);

  
    localStorage.setItem("installed", JSON.stringify(updatedApps));
  };


  //  sort function
  const sortItemApps =(()=>{
    if(sortApps ==="size-asc"){
      return [...installation].sort((a,b)=> a.size - b.size)
    }
     else if(sortApps ==="size-desc"){
      return [...installation].sort((a,b)=> b.size - a.size)
     }
     else{
      return installation
     }
  }
)()

  return (
   <div className="bg-gray-100 pt-5">
    {/* banner */}
      <div className="text-center my-10 space-y-3">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
    Our Your Installed Apps
  </h1>
  <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
   Explore All Trending Apps on the Market developed by us
  </p>
</div>
{/* sort section */}


<div className="flex items-center justify-between mb-4 max-w-[1200px] mx-auto">
  {/* Apps Found */}
<h1 className="md:text-xl font-bold text-gray-800">
  Apps Found <span className="text-[#753DE7]">({installation.length})</span>
</h1>

  {/* sort  */}


<label className="form-control w-full max-w-xs">
    <select value={sortApps} onChange={e=>setSortApps(e.target.value)} className="select select-bordered">
          <option value="none">Sort by size</option>
          <option value="size-asc">Low-&gt;Hight</option>
          <option value="size-desc">Hight-&gt;Low</option>
  </select>
</label>


</div>

 <div>
      {installation.map(app => (
        <InstallationCart 
          key={app.id} 
          app={app} 
          onUninstall={() => handleUninstall(app.id)}
        />
      ))}
    </div>
   </div>
  );
};

export default Installation;
