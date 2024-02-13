import React from 'react';
import "./Banner.css"

const BannerPage = () => {
    return (
        <div className="hero min-h-screen banner-page">
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-lg">
                    <h3 className='text-4xl'>Welcome to our store</h3>
                    <p>Hi Dear customer, Are you thinking to buy a nice phone in a low and minimalistic price? Wow, this online store is best for you. We provide the best service to our customer. We also provide delivery system for our customer.</p>
                    <button className="btn btn-primary mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BannerPage;