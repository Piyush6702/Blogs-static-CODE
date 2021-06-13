import React from "react";
import "./Card.css";
import CardItem from "./cardItem";

import { Link } from "react-router-dom";

import image1 from "../../images/image.jpg";
/**
 * 
* @author
* @function Card

**/

const Card = (props) => {
  const date = new Date("10-06-2021");
  // console.log(props.likedblog[0]);
  return (
    <div className="card_main_cot">
      <div className="card_cot cot">
        <div className="post">
          <header className="header">
            <h2 class="block_title h3" style={{ marginLeft: 10 }}>
              You might also enjoy
            </h2>
          </header>
          <div className="cards">
            <div className="cards__container">
              <div className="cards__wrapper">
                <div className="cards__items">
                  {props.likedblog.map((blog, index) => 
                    <Link to={blog.path}>
                      <CardItem
                        src={blog.src}
                        text={blog.text}
                        label={blog.label}

                        name="CODE Admin"
                        date={date.toLocaleDateString()}
                        tags={blog.tags}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
