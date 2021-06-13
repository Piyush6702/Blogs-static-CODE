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

const DataAlgo = () => {
  const date = new Date("10-06-2021");
  const title = "How to master Data structures and Algorithms";

  const likedblog = [
    {
      src: "/Posters/Social.png",
      text: "7 Best Tips to Elevate Your Social Media Marketing Strategy",
      label: "Social Media Marketing",
      path: "7-Best-Tips-to-Elevate-Your-Social-Media-Marketing-Strategy",
      tags: ["Marketing", "Online Marketing", "Passive Income"],
    },
    {
      src: "/Posters/languages.png",
      text: "Which programming language would be best among Python, Java and C++ ?",
      label: "Programming ",
      path: "Which-programming-language-would-be-best-among-Python-Java-and-Cpp",
      name: "CODE Admin",
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
                    Programming
                  </a>
                </aside>
                <h1 className="article_heading">{title}</h1>
                <div className="date">
                  <span>{date.toLocaleDateString()}</span>
                </div>
                <div className="k">
                  <div className="l">
                    <img src={"Posters/Datastructure.png"}></img>
                  </div>
                  <span class="image_caption overlay">{title}</span>
                </div>
              </header>
            </div>

            <div className="content_body content">
              <div>
                <h2>Pick an Object oriented language</h2>
                <p>
                  Choose a language which you are comfortable with. I chose C++
                  because I know a bit of C and the majority of the companies
                  use java. Python is also another good language and quick to
                  learn and code. I use Python for scripting.
                  <br></br>
                  <br></br>
                  Start with solving easy problems like{" "}
                  <a
                    href="https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=warmup"
                    target="_blank"
                  >
                    here
                  </a>{" "}
                  .There are tons of websites, pick any one of them and start
                  with easy problems and get acquainted with problem solving.
                  <br></br> When you are using any kind of library in solving a
                  problem, understand it’s internal structure. It helps you to
                  understand its limitations when to use it, what its time and
                  space complexities are.
                </p>

                <h2> Make a list of core questions</h2>

                <p>
                  Identify a list of ~100 core problems. Many sites give you 100
                  curated problems<br></br>So, if you are really interested in{" "}
                  <br></br>
                  <br></br>Here’s another way:
                </p>
                <p>
                  Get these two books:
                  <ul className="unbloglist">
                    <li>
                      <b>Elements of Programming Interviews</b>{" "}
                    </li>
                    <li>
                      <b>Cracking the Coding Interview</b>
                    </li>
                  </ul>
                  Collectively, they give you a good variety of hand-picked
                  problems. If you want a structured course for this, check out{" "}
                  <a href="https://interviewcamp.io/" target="_blank">
                    InterviewCamp.io
                  </a>
                </p>

                <h2>Master Each Data Structure</h2>
                <p>
                  Now that you have finalized your list, start with the basics.
                  Know every data structure Learn how to use each data structure
                  in your language. <br></br>
                  Also, learn how to implement them. Yes, implement them by
                  hand. Many people ignore this, but it’s extremely important.
                  Interviewers can ask you about data structure internals. Many
                  problems modify data structures or re-engineer them for a
                  specific use case. To utilize them fully, you need to know how
                  they work.
                </p>
                <h3>Here is a list of data structures to master</h3>
                <ul className="unbloglist">
                  <li>Arrays and Lists</li>
                  <li>2D Arrays</li>
                  <li>Strings</li>
                  <li>Linked List</li>
                  <li>Stack</li>
                  <li>Queue</li>
                  <li>Hash Table & Hash Set</li>
                  <li>Heap</li>
                  <li>Graphs</li>
                  <li>Binary Tree</li>
                  <li>Binary Search Tree</li>
                  <li>Trie</li>
                </ul>
                <p>
                  How to go about it? Let’s say your core problems are divided
                  by data structure. You can master each data structure when you
                  start each section. Or, you can master them all at the
                  beginning. Do what works for you.
                </p>
                <h2>How to solve and Optimise</h2>
                <p>
                  I followed this fashion. Do not straight away look at already
                  existing solutions. See if you can visualise and put a
                  solution on paper however naive the solution is. Initially it
                  will take time, but soon you will acquire skills to solve it
                  in a shorter time. I validate below points on every solution
                </p>
                <ol className="olbloglist">
                  <li>Estimate the time and space complexities</li>
                  <li>Check for any repetitive or unnecessary loops.</li>
                  <li>
                    Decreasing the time complexity with increment of space
                    utilisation (Trade-off between space and time)
                  </li>
                  <li>Scrap this solution and think about a new one.</li>
                </ol>
                <p>
                  Alright. You made a list of questions and you started solving
                  them. Here’s a common question we get
                  <br></br>
                  <br></br>
                  <b>
                    “I solve many questions but can’t solve them in a week ! How
                    do I remember solutions?”
                  </b>
                  <br></br>
                  <br></br>
                  The key is to not remember solutions. The key is to practice
                  them. When you see a problem, you should immediately be able
                  to break it down and re-create the solution. This is different
                  from rote learning. You’re recognizing different components,
                  breaking them down and solving the problem.
                </p>
                <h3>
                  Focus more on the quality of the problem rather than focusing
                  on quantity
                </h3>
                <ul className="unbloglist">
                  <li>Practice questions for each data structure thoroughly</li>
                  <li>
                    There are many websites where you can practise them like
                    hackerrank(beginners friendly), codechef,hackerearth and
                    leetcode
                  </li>
                </ul>
                <h3>Practice on paper</h3>
                <ul className="unbloglist">
                  Here are some benefits of practicing on paper
                  <li>
                    You’re forced to plan your code before writing. You can’t
                    just go back and retype
                  </li>
                  <li>
                    You will start learning correct language syntax and data
                    structure usage. With an IDE, code used to write itself
                  </li>
                  <li>
                    You can take a paper and pen anywhere with you to practice
                  </li>
                  <li>
                    And more importantly, it is a realistic simulation of a
                    whiteboard interview
                  </li>
                </ul>
                <h2>Practice</h2>
                <p>
                  Practice is the key to excel in coding. GeeksForGeeks, also
                  known as the encyclopedia of coding has numerous questions
                  with editorial so practice at least 4 problems each day.
                  <br></br>
                  <br></br>A little trick that I used is, maintain a notepad of
                  the problems which are extremely tough for you and visit those
                  problems on a daily/ weekly basis. This will keep on
                  reiterating the logic in your mind and you will get hold of
                  it. Never memorize the code. Understand the logic and practice
                  the same code at regular intervals.<br></br>
                  <br></br>
                  Learn to use the debugger. It's going to save a lot of your
                  time if you practice fixing the error with the help of a
                  debugger. And finally, code with passion. Never give up. It
                  might be tough but keep on pushing yourself. You'll soon get
                  there.
                </p>
                <b>Happy Coding!!</b>
              </div>
            </div>
            <div className="article_footer">
              <div className="article_tag">
                <div className="tags post-tag">
                  <span className="tag_icon">
                    <FaTag /> TAGS
                  </span>
                  <span>
                    {["DSA", "Programming", "Java", "C++"].map((tag, index) => (
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
              leftarticle={"Should I learn Web Development"}
              leftimage={"Posters/Web-Development.png"}
              rightarticle={
                "7 Steps on How to be an App Developer from Beginner to Pro"
              }
              rightimage={"Posters/App.png"}
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

export default DataAlgo;
