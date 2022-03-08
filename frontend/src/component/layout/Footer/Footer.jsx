import React from "react";
import "./Footer.css";
import playStore from "../../../images/playStore.png";
import appStore from "../../../images/appStore.png";

const Footer = () => {
  return (
    <div id="Footer">
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="playstore" />
        </div>

        <div className="midFooter">
          <h1>NishoShope</h1>
          <p>High Quality is our first priority</p>
          <p>Copyrights 2022 &copy; NishantArgade</p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="/">Instagram</a>
          <a href="/">Youtube</a>
          <a href="/">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
