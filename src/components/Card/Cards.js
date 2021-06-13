import React from "react";
import "./style.css";
import CardItem from "./Carditem";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";

import { Link } from "react-router-dom";

function Cards() {
  const date = new Date("10-06-2021");

  return (
    <div>
      <div className="cards">
        <h2>Programming</h2>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="cards__items">

              <Link to="/Advantages-of-Competitive-Programming">
                <CardItem
                  src={"/Posters/CP.png"}
                  text="Advantages of Competitive Programming"
                  label="Programming"
                  path=""
                  name="CODE Admin"
                  date={date.toLocaleDateString()}
                  tags={["Competitive Programming", "C++", "Python", "Java"]}
                />
              </Link>
              <Link to="/Which-programming-language-would-be-best-among-Python-Java-and-Cpp">
                <CardItem
                  src={"/Posters/languages.png"}
                  text="Which programming language would be best among Python, Java and C++ ?"
                  label="Programming "
                  path=""
                  name="CODE Admin"
                  date={date.toLocaleDateString()}
                  tags={["Best Programming Languages", "C++", "Python", "Java"]}
                />
              </Link>
              <Link to="/How-to-master-Data-structures-and-Algorithms">
                <CardItem
                  src={"/Posters/Datastructure.png"}
                  text="How to master Data structures and Algorithms"
                  label="Programming"
                  path=""
                  name="CODE Admin"
                  date={date.toLocaleDateString()}
                  tags={["DSA", "Programming", "Java", "C++"]}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <h2>Development</h2>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="cards__items">

              <Link to="/Should-I-learn-Web-Development">
                <CardItem
                  src={"/Posters/Web-Development.png"}
                  text=" Should I learn Web Development"
                  label="Development"
                  path=""
                  name="CODE Admin"
                  date={date.toLocaleDateString()}
                  tags={["HTML", "CSS", "Full Stack"]}
                />
              </Link>
              <Link to="/7-Steps-on-How-to-be-an-App-Developer-from-Beginner-to-Pro">
                <CardItem
                  src={"/Posters/App.png"}
                  text="7 Steps on How to be an App Developer from
                Beginner to Pro"
                  label="Development"
                  path=""
                  name="CODE Admin"
                  date={date.toLocaleDateString()}
                  tags={["App Development", "Java", "flutter", "Kotlin"]}
                />
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <h2>Social Media Marketing</h2>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="cards__items">
            <Link to="/7-Best-Tips-to-Elevate-Your-Social-Media-Marketing-Strategy">
              <CardItem
                src={"Posters/Social.png"}
                text="7 Best Tips to Elevate Your Social Media
                Marketing Strategy"
                label="Social Media Marketing"
                path=""
                name="CODE Admin"
                date={date.toLocaleDateString()}
                tags={["Marketing", "Online Marketing", "Passive Income"]}
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
