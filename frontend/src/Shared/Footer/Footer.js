import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-5 justify-evenly lg:px-20 py-10 bg-gray-900 text-white">
      <div>
        <span className="font-bold text-xl">Services</span>
        <p>Branding</p>
        <p>Design</p>
        <p>Marketing</p>
        <p>Advertisement</p>
      </div>
      <div>
        <span className="font-bold text-xl">Company</span>
        <p>About us</p>
        <p>Contact</p>
        <p>Jobs</p>
        <p>Press kit</p>
      </div>
      <div>
        <span className="font-bold text-xl">Social</span>
        <div className="flex gap-4 mt-5">
          <span>
            {" "}
            <FaFacebook />{" "}
          </span>
          <span>
            {" "}
            <FaTwitter />{" "}
          </span>
          <span>
            {" "}
            <FaYoutube />{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
