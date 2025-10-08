import React from 'react';
import Banner from '../../Components/Banner';
import App from '../../App';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const Home = () => {
const appData = useLoaderData();
console.log(appData);
    return (
        <div>
            <Banner></Banner>
            <Apps appData={appData}></Apps>
        </div>
    );
};

export default Home;