import React from 'react';
import Advertisment from '../Advertisment/Advertisment';
import BannerPage from '../BannerPage/BannerPage';
import Feedback from '../Feedback/Feedback';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <BannerPage />
            <Products />
            <Advertisment />
            <Feedback />
        </div>
    );
};

export default Home;