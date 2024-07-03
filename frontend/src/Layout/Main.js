import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-base-200">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
