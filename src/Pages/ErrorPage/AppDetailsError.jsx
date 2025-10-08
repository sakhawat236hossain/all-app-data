import React from 'react';
import appErrorIMG from "../../assets/App-Error.png"
const AppDetailsError = () => {
    return (
         <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
               <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-6">
                 
                 {/* Error Image */}
                 <img src={appErrorIMG } alt="Page Not Found" className="w-40 h-40 object-contain" />
                 
                 {/* Main Message */}
                 <p className="text-3xl font-bold text-gray-800">OPPS!! APP NOT FOUND </p>
                 
                 {/* Sub Message */}
                 <p className="text-gray-600">The App you are requesting is not found on our system.  please try another apps</p>
                 
                 {/* Go Back Button */}
                 <a
                   href="/"
                   className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 shadow-md transition-all duration-300"
                 >
                   Go Back Home
                 </a>
               </div>
             </div>
    );
};

export default AppDetailsError;