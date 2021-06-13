import React from "react";
import "./Hero.css";
import image1 from "../../images/image1.jpg";
import { Link } from "react-router-dom";

/**
 * @author Shivangi
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="header_container">
      <div className="div1">
        <div id="containr" className="cards__item__pic-wrap1">
          <Link to="/Advantages-of-Competitive-Programming">
            <p className="SideTag">Programming</p>
            <img src={"Posters/CP.png"} className="image1" />
            <div class="example">
              <a>Advantages of Competitive Programming</a>
              <div className="tab">
                {["Competitive Programming", "C++", "Python", "Java"].map(
                  (tag, index) => (
                    <span key={index} className="round-tab">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="div2">
        <Link
          to="/7-Steps-on-How-to-be-an-App-Developer-from-Beginner-to-Pro"
          className="recent_card  cards__item__pic-wrap1"
          id="container"
        >
          <p className="SideTag">Developement</p>
          <span className="d">
            <img src={"/Posters/App.png"} className="image2" />
          </span>
          <div className="text_overlay ">
            <a>7 Steps on How to be an App Developer from Beginner to Pro</a>
            <div className="tab">
              {["App Developement", "Java", "flutter", "Java"].map(
                (tag, index) => (
                  <span key={index} className="round-tab">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </Link>
        <Link
          to="/7-Best-Tips-to-Elevate-Your-Social-Media-Marketing-Strategy"
          className="recent_card cards__item__pic-wrap1"
          id="container"
        >
          <p className="SideTag">Social Media Marketing</p>
          <div className="d">
            <img src={"Posters/Social.png"} className="image2" />
          </div>
          <div className="text_overlay">
            <a>7 Best Tips to Elevate Your Social Media Marketing Strategy</a>
            <div className="tab">
              {["Marketing", "Online Marketing", "Passive Income"].map(
                (tag, index) => (
                  <span key={index} className="round-tab">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
