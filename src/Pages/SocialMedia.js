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

const SocialMedia = () => {
  const date = new Date("10-06-2021");
  const title = "7 Best Tips to Elevate Your Social Media Marketing Strategy";

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
      src: "/Posters/Web-Development.png",
      text: "Should I learn Web Development",
      label: "Development",
      path: "Should-I-learn-Web-Development",
      tags: ["HTML", "CSS", "Full Stack"],
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
                    Social Media Marketing
                  </a>
                </aside>
                <h1 className="article_heading">{title}</h1>
                <div className="date">
                  <span>{date.toLocaleDateString()}</span>
                </div>
                <div className="k">
                  <div className="l">
                    <img src={"Posters/Social.png"}></img>
                  </div>
                  <span class="image_caption overlay">{title}</span>
                </div>
              </header>
            </div>

            <div className="content_body content">
              <p>
                For the success of any company's digital marketing strategy, an
                efficient <b>social media marketing strategy</b> is crucial.
                Just posting content and hoping it’ll work will not be helpful.
                You will have to understand your goals, analyze your target
                audience as well as their needs deeply. It’ll not only help in
                creating content of their needs but also to increase brand
                awareness as well as to drive traffic to your website. So here
                are some tips to help you elevate your{" "}
                <b>social media marketing strategy</b>
              </p>
              <h2>An efficient content marketing strategy</h2>
              <p>
                Optimized and thorough content is the most essential part of the
                success of a company. Content marketing is a distinguished style
                of selling and promoting and that cannot be denied. Several
                companies don’t link it with the proper posting schedule and
                also the correct frequency of posts. Other than drawing in an
                interested audience, a decent content marketing strategy can be
                enforced free of charge. Make certain to form a relevant hashtag
                strategy together with your high-quality SEO content.
              </p>
              <h2>Profiles on Different Channels</h2>
              <p>
                Anyone can create a profile on any social media channel
                nowadays. The goal is to communicate with a large number of
                people digitally and create a large network. But here you can’t
                just try to influence all types of people and expect fruitful
                results. The key is to carefully choose your target audience and
                reach out to them. Analyze their choice and behavior and select
                the social media they prefer to hang out on. Always choose your
                social media marketing channel carefully. For example, a cooking
                blog can influence greatly on Pinterest whereas any educational
                institute may need a LinkedIn or Facebook profile
              </p>
              <h2> A well-planned budget</h2>
              <p>
                Social media marketing is one among, if not the foremost
                necessary, styles of marketing. Therefore you need to figure out
                a well-planned proper budget for social media endeavors to
                ensure success at different social media platforms. After that,
                you need to invest that budget with a proper strategy as it will
                prove to be a highly cost-effective approach. Social media is
                all about connecting with people. The deeper you connect with
                your customers on a personal level, the more successful will be
                your venture. Big budgets are not a sure-shot way for success in
                social media marketing but a well-planned budget is
              </p>
              <h2>Helpful Chatbots</h2>
              <p>
                A chatbot is a digital tool that will communicate and resolve
                issues for your customers while not having the potential want
                for any human interruption. That’s why chatbots are a real yes
                to go for these days. Additionally, chatbots integrate with the
                social media platforms that buyers currently feel most snug
                interacting through. Platforms like Chattypeople help in adding
                an AI-powered chatbot into your social media strategy
                straightforwardly. These tools permit you to form a chatbot that
                doesn't require any coding knowledge. Also, it can answer client
                queries, can require orders directly from messages and comments,
                and integrates with all the key payment systems
              </p>
              <h2>Streaming Live</h2>
              <p>
                You can tell your story with the live audience and interact with
                them in real-time to share your thoughts and also take
                suggestions and feedback. Facebook and Instagram have built an
                amazing feature of streaming live with your audience while
                sharing real-time stories and experiences. If used to its full
                extent, this feature can prove to be a real game-changer in
                social media marketing on relevant platforms. You can get a lead
                on others by catching on to the live stream feature. They can
                help influence a live audience about your vision and brand on a
                personal level, rising above the looks of a money-making
                company. You can easily stream live to engage and interact with
                your target audience and create effective and relevant quality
                content
              </p>

              <h2>Create A Community</h2>
              <p>
                Don’t go aiming for having followers of a company like a robot,
                relate to people with emotions and humor in your content and
                posts, and aim for creating a community. Although followers or
                subscribers are important, they can’t guarantee the success of
                social media marketing until you let people relate to the brand
                as a human endeavor to help them. People are in search of
                connections and social interactions when they join social media,
                cater to these needs. Communicate and interact with them by
                asking questions or polls about their opinion on any topic.
                Share information or views that might be valuable and helpful to
                them instead of just giving out the news. Try to like or share
                their contents as well so that there is a mutually respectful
                and interactive relation between you and the audience
              </p>
              <h2>Brand Advocates</h2>
              <p>
                Give love back to people who love your brand. Also, they can be
                your best tool to create awareness in others. Finding new
                customers is important, but it's equally important to keep the
                current ones loyal, satisfied and engaged. You can take their
                help to promote your brand as a social media marketing strategy.
                Create a section about their views and news relevant to
                yourcontent and let them advocate with interactions with a
                potential new audience. The audience is more likely to give your
                product a try if they find someone with a common story
                advocating you or finding your product helpful. Your employees
                can be the most effective and influencing advocate of your brand
                on social media
              </p>
              <br></br>
              <p>
                So, a social media marketing strategy is the most effective way
                to promote or sell your services, burn only if used to the best
                of its potential. Hope you find the above tips helpful in taking
                your brand to greater heights.
              </p>
            </div>
            <div className="article_footer">
              <div className="article_tag">
                <div className="tags post-tag">
                  <span className="tag_icon">
                    <FaTag /> TAGS
                  </span>
                  <span>
                    {["Marketing", "Online Marketing", "Passive Income"].map(
                      (tag, index) => (
                        <a key={index}>
                          {" "}
                          <span className="round-tab">{tag}</span>
                        </a>
                      )
                    )}
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
                "7 Steps on How to be an App Developer from Beginner to Pro"
              }
              leftimage={"Posters/App.png"}
              rightarticle={" "}
              rightimage={" "}
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

export default SocialMedia;
