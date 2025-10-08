import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const { id } = useParams(); 
    const appId = parseInt(id)
    const appData = useLoaderData();   
    
    const singleApp = appData.find(app => app.id === appId);
    
    console.log("id:", id);
    console.log("App Data:", appData);
    console.log("Single App:", singleApp);

    if (!singleApp) return <p>App not found!</p>;

    return (
        <div>
            {/* img */}
          <div>

          </div>
        </div>
    );
};

export default AppDetails;
