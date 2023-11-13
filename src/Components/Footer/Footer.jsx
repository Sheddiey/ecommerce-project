import React from "react";
import footer_logo from "../Assets/logo.jpeg";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="">
      <div>
        <img src={footer_logo} alt="" />
        <p className="uppercase">Oningoi</p>
      </div>
      <ul>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <div>
          <img src={instagram_icon} alt="" />
        </div>
        <div>
          <img src={pinterest_icon} alt=" " />
        </div>
        <div>
          <img src={whatsapp_icon} alt=" " />
        </div>
      </div>
      <div>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
