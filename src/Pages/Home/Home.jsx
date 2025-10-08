import React from "react";
import Banner from "../../Components/Banner";
import App from "../../App";
import { Link, useLoaderData } from "react-router";
import Apps from "../Apps/Apps";


const Home = () => {
  const appData = useLoaderData();
  console.log(appData);
  return (
    <div>
      <Banner></Banner>
      <Apps appData={appData}></Apps>

      <div className="flex items-center justify-center mb-3">
        <Link to="/all-apps-page" className="btn btn-active btn-primary">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
