import React, { useEffect, useState } from "react";
import InstallationCart from "./installationCart";


const Installation = () => {
  const [installation, setInstallation] = useState([]);

  useEffect(() => {
    const installationAppSaved = JSON.parse(localStorage.getItem("installed"));
    if (installationAppSaved) {
      setInstallation(installationAppSaved);
    }
  }, []);

  return (
   <div>
    {
      installation.map((app) => (
  <InstallationCart key={app.id} app={app} />
))
    }
   </div>
  );
};

export default Installation;
