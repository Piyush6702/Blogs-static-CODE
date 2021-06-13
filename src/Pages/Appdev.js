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

const Appdev = () => {
  const date = new Date("10-06-2021");
  const title = "7 Steps on How to be an App Developer from Beginner to Pro";

  const likedblog = [
    {
      src: "/Posters/Datastructure.png",
      text: "How to master Data structures and Algorithms",
      label: "Programming",
      path: "How-to-master-Data-structures-and-Algorithms",
      tags: ["DSA", "Programming", "Java", "C++"],
    },
    {
      src: "/Posters/languages.png",
      text: "Which programming language would be best among Python, Java and C++ ?",
      label: "Programming ",
      path: "Which-programming-language-would-be-best-among-Python-Java-and-Cpp",
      tags: ["Best Programming Languages", "C++", "Python", "Java"],
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
                    <img src={"Posters/App.png"}></img>
                  </div>
                  <span class="image_caption overlay">{title}</span>
                </div>
              </header>
            </div>

            <div className="content_body content">
              <p>
                As soon as you unlock your phone, a large number of icons for
                different apps are lying on your fingertips to pop open. Judging
                from that, it’s safe to assume mobile applications have a large
                demand and a long way to go. Naturally, everyone wants to build
                the next great app of the generation. But having a great idea is
                not enough, instead of approaching a developer, you can learn
                and develop it on your own.<br></br>
                <br></br>
                So, don’t worry, we have brought to you the seven best app
                development steps you need to follow on your journey from a
                beginner to a pro app developer.
              </p>
              <div>
                <h2> Know Your Goal</h2>
                <p>
                  Before you start developing an app, be clear about the idea
                  that you have in your mind. Figure out what you want to make
                  and what’s the use of it. Having a clear idea about its
                  functionalities, you can easily make a clear strategy about
                  app development as well as marketing and monetizing it. If you
                  wish to be a freelancer, then you don’t need to worry much
                  about its goal or marketing strategies as your focus will be
                  on just building it. Having a clear-cut idea of the app as
                  well as a proper strategy for making a profit out of it will
                  also help you out in making a budget for your app. And if you
                  don’t have it, don’t fret, you just have to learn everything
                  from scratch and develop it on your own.
                </p>
                <h2>Choose The Platform</h2>
                <p>
                  First of all, select the platform on which you want to build
                  your app. App development is not a simple task and needs time,
                  practice, and patience, so it’s best to always start from a
                  single platform and master it. From there, you may move on to
                  excel the others. The major app marketing platforms are
                  Android, iOS, Blackberry, and Windows. Android (Google Play)
                  has the highest number of customers and apps, followed by iOS
                  (Apple App Store). So, make your decision wisely and go for
                  it.
                </p>
                <h2>Grasp the Fundamentals</h2>
                <p>
                  If you’re a complete beginner and have no idea about
                  programming, it’ll be advised to get the basics down before
                  starting the journey towards app development. You can take an
                  introductory course from various online platforms to
                  understand the basics of any programming language. Once you’ve
                  grasped the working of a programming language and some other
                  introductory concepts, you are good to go for understanding
                  how an app works
                </p>

                <h2> Learning The Coding Skills</h2>
                <p>
                  Choose a Programming language to code in depending on the
                  platform you selected. If you opt for iOS development, Swift
                  and Objective-C are the choices you may choose from. Swift is
                  helpful to develop an application single-handedly. If you have
                  got to modify or add to an already existing application, you
                  would possibly like Objective-C. This is often a result of a
                  variety of iOS applications being engineered on Objective-C
                  and it still being in use.<br></br>
                  <br></br>
                  In the case you have decided on going for android app
                  development, you would wish to grasp Java or Kotlin. The
                  Kotlin official website has documentation for android
                  development as Google formally supports Kotlin. The Kotlin
                  website helps you to attempt the language online on its site!
                  You may also look at Google’s Android App Developer Library
                  that could be a comprehensive guide to assist you.
                </p>

                <h2> Practice</h2>
                <p>
                  Practice makes a person perfect. Knowing how to code is not
                  enough, you’ll need to practice more and more. You need to
                  start coding for app development to perfectly polish your
                  skills. You can learn with small projects about how to proceed
                  with an idea, designing it, making layout features, writing
                  the code accordingly, and then testing it.
                </p>

                <h2>Don’t stop learning</h2>
                <p>
                  You need to stay Up to Date with the Latest Technologies in
                  app development. It is a constantly changing and evolving
                  field, with new technologies developing every day. To remain
                  at the top of them, one needs to be updated on all the
                  changes. You can stay updated through various emails which are
                  sent by many websites on subscribing. It is good to be
                  subscribed to newsletters, to catch up with all the recent
                  developments, and not miss out on any updates. For example,
                  Kotlin has a newsletter for the same purpose.
                </p>

                <h2>Gain Experience</h2>
                <p>
                  Now if you wish to be hired by some of the best app
                  development companies, You will need to gain a lot of
                  experience and excellence. Don’t be just satisfied by learning
                  the technology, gain expertise over it. This can be achieved
                  by building a lot of projects on regular basis. You can also
                  apply for internships as an app developer according to their
                  needs. You’ll not only give you experience but you’ll also get
                  to work under an expert. All of this would be beneficial for
                  polishing your skills, making you a pro in app development.
                  You can also build your skills and a great CV by getting
                  professionally certified from any platform. You can build an
                  app once you get the practice and expertise over app
                  development.Developing an app is not a tough task these days,
                  but it requires patience and practice. Once you’ve decided no
                  one can stop you from mastering it. Hope the above tips would
                  be helpful and valuable in your journey of app development.
                </p>
              </div>
            </div>
            <div className="article_footer">
              <div className="article_tag">
                <div className="tags post-tag">
                  <span className="tag_icon">
                    <FaTag /> TAGS
                  </span>
                  <span>
                    {["App Development", "Java", "flutter", "Kotlin"].map((tag, index) => (
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
              leftarticle={
                "How to master Data structures and Algorithms"
              }
              leftimage={"Posters/Datastructure.png"}
              rightarticle={"7 Best Tips to Elevate Your Social Media Marketing Strategy"}
              rightimage={"Posters/Social.png"}
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

export default Appdev;
