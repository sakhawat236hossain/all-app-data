import React from 'react';
import { useLoaderData } from 'react-router';
import AllAppsPageCart from './AllAppsPageCart';

const AllAppsPge = () => {
    const allAppsData = useLoaderData()
    console.log(allAppsData);
    return (
        <div>
           
             <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-[1300px] mx-auto">
            {
                allAppsData.map((cart)=><AllAppsPageCart key={cart.id} cart={cart}></AllAppsPageCart>)
            }
      </div>
        </div>
    );
};

export default AllAppsPge;