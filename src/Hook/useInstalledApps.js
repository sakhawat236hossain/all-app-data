import { useEffect, useState } from "react";
import axios from "axios";

const useInstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios.get("/AppData.json")
      .then(res => {
        setInstalledApps(res.data); 
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { installedApps, loading, error };
};

export default useInstalledApps;
