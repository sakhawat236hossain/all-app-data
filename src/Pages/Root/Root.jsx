import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer';
import LoadingSpinner from '../../Components/LoadingSpinner';

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Spinner / Page content */}
      <main className="flex-1">
        {loading ? <LoadingSpinner /> : <Outlet />}
      </main>

      <Footer />
    </div>
  );
};

export default Root;
