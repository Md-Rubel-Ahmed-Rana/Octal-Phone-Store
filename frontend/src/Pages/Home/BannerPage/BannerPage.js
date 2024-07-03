import React from "react";
import "./Banner.css";
import { bannerData } from "../../../constants/bannerData";

const BannerPage = () => {
  return (
    <div className="hero lg:min-h-screen  banner-page">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content py-10 lg:py-0 text-center text-white">
        <div className="max-w-lg">
          <h3 className="text-2xl lg:text-4xl">{bannerData.title}</h3>
          <p className="text-sm">{bannerData.desc}</p>
          <button className="btn btn-primary mt-5">{bannerData.btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
