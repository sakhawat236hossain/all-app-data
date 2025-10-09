const getStoredApps = () => {
  const storedAppsSTR = localStorage.getItem("installed");
  if (storedAppsSTR) {
    
    return JSON.parse(storedAppsSTR);
  } else {
    return [];
  }
};

const addToStoredDA = (app) => {
  const storedAppsData = getStoredApps();


  const isExist = storedAppsData.some((a) => a.id === app.id);

  if (isExist) {
    alert("Already exists!");
  } else {
    storedAppsData.push(app);
    localStorage.setItem("installed", JSON.stringify(storedAppsData));
    console.log("App saved:", app);
  }
};

export { getStoredApps, addToStoredDA };
