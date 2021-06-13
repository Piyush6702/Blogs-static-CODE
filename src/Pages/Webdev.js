import React from "react";
import "../Individual Blog/Components/main/main.css";
// import image from "../../images/image.jpg";
import Comment from "../Individual Blog/Components/comment/comment";
import { FaFacebook, FaShare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import "./Blog.css";
import Card from "../Individual Blog/Components/Card/Card";
import SearchPost from "../components/SearchPost";
// import article from "./article"
/**
 * @author
 * @function
 **/

const Webdev = () => {
  const date = new Date("10-06-2021");
  const title = "Should I learn Web Development";

  const likedblog = [
    {
      src: "/Posters/Social.png",
      text: "7 Best Tips to Elevate Your Social Media Marketing Strategy",
      label:"Social Media Marketing",
      path:"7-Best-Tips-to-Elevate-Your-Social-Media-Marketing-Strategy",
      tags:["Marketing", "Online Marketing", "Passive Income"]
    },
    {
      src: "/Posters/App.png",
      text: "7 Steps on How to be an App Developer from Beginner to Pro",
      label: "Development",
      path: "7-Steps-on-How-to-be-an-App-Developer-from-Beginner-to-Pro",
      tags: ["App Development", "Java", "flutter", "Java"],
    },
    {
      src: "/Posters/CP.png",
      text: "Advantages of Competitive Programming",
      label: "Programming",
      path: "Should-I-learn-Web-Development",
      tags: ["Competitive Programming", "C++", "Python", "Java"],
    },
  ];
  return (
    <>
      <div className="ll Blog">
        <div className=" l container">
          <div className="main_container">
            <div className="content">
              <header className="header1 header2">
                <aside className="cat_position cat_info">
                  <a class="catagory" href="">
                  Development
                  </a>
                </aside>
                <h1 className="article_heading">{title}</h1>
                <div className="date">
                  <span>{date.toLocaleDateString()}</span>
                </div>
                <div className="k">
                  <div className="l">
                    <img src={"Posters/Web-Development.png"}></img>
                  </div>
                  <span class="image_caption overlay">{title}</span>
                </div>
              </header>
            </div>

            <div className="content_body content">
              <p>
                A big Yes, to the question. Web development never goes out of
                business. If you become a good web developer, you can earn a
                pretty good amount and learn so many new things every day that
                can improve your skills more and more. Web development is worth
                it if you are passionate about it
              </p>
              <div>
                <h2>ABOUT WEB DEVELOPMENT</h2>
                <p>
                  Web development is the building and maintenance of websites;
                  it's the work that happens behind the scenes to make a website
                  look great, work fast and perform well with a seamless user
                  experience. Web development skills are in high demand
                  worldwide and well paid too – making development a great
                  career option
                  <br></br>The field of web development is generally broken down
                  into front-end (the user-facing side) and back-end (the server
                  side). Let's delve into the details.
                </p>
                <ol className="olbloglist">
                  <li>
                    {" "}
                    A front-end dev takes care of layout, design and
                    interactivity using <b>HTML, CSS and JavaScript</b> . They
                    take an idea from the drawing board and turn it into
                    reality.
                  </li>
                  <li>
                    {" "}
                    The backend developer engineers deal with what is going on
                    behind the scenes. This is where the data is stored, and
                    without this data, there would be no frontend.
                    <b> PHP, Python with Django, Ruby with Ruby on Rails, Node.js
                      with Express.js, etc{" "}
                    </b>
                  </li>
                </ol>
                <h2>PERKS ARE GIVEN BELOW</h2>
                <ol className="olbloglist">
                  <li>
                    You don't need any specific/higher education for being a Web
                    Developer
                  </li>
                  <li>
                    8 out of 10 Employers are always looking for you, as every
                    company needs/has a website
                  </li>
                  <li>You get paid for what you know and not your education</li>
                  <li>
                    You are blessed with those tons of free resources all over
                    the internet
                  </li>
                  <li>
                    You can take control of your schedule, work from anywhere,
                    anytime (Just that you need an Internet connection :P ).
                  </li>
                  <li>
                    No one argues with you, you get a special respect for your
                    work
                  </li>
                  <li> You can never be jobless, never ever</li>
                  <li>You can earn more than your Boss </li>
                </ol>
                
                <p>
                and many more ....<br></br>So, if you are really interested in this field and want the
                  above-mentioned perks, then it's time to start ! 
                  <br></br>
                  Web developers are employed by some of the biggest companies that
                  pay them really well. So if you get an opportunity to work
                  with <b> Amazon.com Inc</b>, you will earn a salary of around
                  <b> Rs 1,400,000  per annum</b> ,which is the highest average salary that
                  any company pays to its web developers.
                </p>
                <b>CHOICE IS YOURS  : )</b>
              </div>
            </div>
            <div className="article_footer">
              <div className="article_tag">
                <div className="tags post-tag">
                  <span className="tag_icon">
                    <FaTag /> TAGS
                  </span>
                  <span>
                    {["HTML", "CSS", "Full Stack"].map((tag, index) => (
                      <a key={index}>
                        {" "}
                        <span className="round-tab">{tag}</span>
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            {/* social media div */}
            <aside className="social_media_cot">
              <div className="share_tab">
                <span className="share_no">0</span>
                <span className="share">Shares</span>
              </div>
              <div className="social_media">
                <a>
                  <i className="social_icon facebook">
                    <FaFacebook />
                  </i>{" "}
                  <span className="fb"> Share on Facebook</span>
                </a>
                <a>
                  <i className="social_icon twitter">
                    <FaTwitter />{" "}
                  </i>
                  <span className="twi">Share on Twitter</span>
                </a>
                <a>
                  <i className="social_icon pinterest">
                    <FaPinterest />{" "}
                  </i>
                </a>
                <a>
                  <i className="social_icon mail">
                    <FaEnvelope />
                  </i>
                </a>
              </div>
            </aside>

            <Comment
              leftarticle={"Which programming language would be best among Python Java and Cpp"}
              leftimage={"Posters/Languages.png"}
              rightarticle={"How to master Data structures and Algorithms"}
              rightimage={"Posters/Datastructure.png"}
            />
          </div>
          {/* main container end here */}
          <div className="recent_container">
            <div className="sidebar">
              <div className="op search search_box">
                <form className="search_form" style={{ marginLeft: 0 }}>
                  <label>
                    <span></span>
                    <input
                      type="Search"
                      placeholder="Search"
                      className="search_input"
                    ></input>
                  </label>
                  {/* <input type="submit" className="search_icon"></input> */}
                </form>
              </div>
              <SearchPost date={date} />
            </div>
          </div>
        </div>
      </div>
      <Card likedblog={likedblog} />
    </>
  );
};

export default Webdev;
