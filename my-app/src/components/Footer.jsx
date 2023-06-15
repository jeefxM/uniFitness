import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#333333] min-h-[15vh] flex flex-col">
      <div className=" flex justify-between p-5 px-10">
        <div>
          <ul className="flex gap-16">
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="flex gap-10">
          <AiFillInstagram size={30} />
          <IoLogoFacebook size={30} />
          <AiOutlineTwitter size={30} />
        </div>
      </div>
      <div className="flex justify-center mt-auto">
        <p>Copyright © 2018 by ks fitness world. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
