
const getStoredApps = () => {
  const stored = localStorage.getItem("installed");
  if (stored) return JSON.parse(stored);
  return []; 
};

// localStorage তে নতুন app add করা
const addToStoredDA = (app) => {
  const storedApps = getStoredApps();

  // Duplicate check
  const isExist = storedApps.some(a => a.id === app.id);
  if (isExist) {
    alert("Already exists!");
    return;
  }

  // নতুন app push
  storedApps.push(app);

  // Save back
  localStorage.setItem("installed", JSON.stringify(storedApps));
};

export { getStoredApps, addToStoredDA };
