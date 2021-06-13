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

const Competitive = () => {
  const date = new Date("10-06-2021");
  const title = "Advantages of Competitive Programming";

  const likedblog = [
    {
      src: "/Posters/Datastructure.png",
      text: "How to master Data structures and Algorithms",
      label: "Programming",
      path: "How-to-master-Data-structures-and-Algorithms",
      tags: ["DSA", "Programming", "Java", "C++"],
    },
    {
      src: "/Posters/App.png",
      text: "7 Steps on How to be an App Developer from Beginner to Pro",
      label: "Development",
      path: "7-Steps-on-How-to-be-an-App-Developer-from-Beginner-to-Pro",
      tags: ["Competitive Programming", "C++", "Python", "Java"],
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
                  Programming 
                  </a>
                </aside>
                <h1 className="article_heading">{title}</h1>
                <div className="date">
                  <span>{date.toLocaleDateString()}</span>
                </div>
                <div className="k">
                  <div className="l">
                    <img src={"Posters/CP.png"}></img>
                  <span class="image_caption overlay">{title}</span>
                  </div>
                </div>
              </header>
            </div>

            <div className="content_body content">
              <p>
                Programming is considered a human activity. The more you
                practice, the more you will move forward. The harsh truth is
                that only a certificate/degree in computer science is not enough
                to get a job. Programming skills, as well as knowledge of
                computer science topics, are important. The easiest way to
                acquire knowledge and skills is to solve programming problems.
                It (problem-solving/competitive programming) enhances coding
                skills, improves logic, and increases knowledge of data
                structures and algorithms..now let’s talk about benefits in
                detail.
              </p>
              <div>
                <h2>To get a Job/Internship</h2>
                <p>
                  Most interviewers see how you approach a particular problem
                  rather than its implementation. so the logic-building skill
                  comes from practicing more and more problems. The interview
                  process of all the tech giants and other software companies is
                  highly biased towards hiring people good at solving
                  algorithmic problems within a given time. This is true, for
                  both online coding rounds as well as for onsite whiteboard
                  coding interview rounds.so If your goal is to work in FAANG
                  like companies then you definitely start doing competitive
                  programming without any delay.If you can acquire good skills,
                  you don't have to worry about the job! So keep doing coding
                  practice. Now moving toward the internship section, most of
                  the prestigious companies shortlist resumes based on
                  candidates’ coding profiles.
                </p>
                <h2>Improves thinking process</h2>
                <p>
                  When we study algorithms just for exams, we rarely pay
                  attention to the correctness of the algorithms or the multiple
                  different variations of that same algorithm, we simply learn
                  them. But when we work on a complex algorithmic problem then
                  we know many unreachable points related to that algorithm that
                  are not even understood by reading many times.
                </p>
                <h2>Improves your concentration</h2>
                <p>
                  Usually, the coding contests are short and In a short contest,
                  you will be required to solve an average of 4 - 5 problems in
                  an average span of 2.5 - 3 hours. That gives you an approx of
                  40 minutes of time per problem, in which you have to think
                  about the solution with corner cases, code the solution and
                  debug (if code is not accepted). Moreover, during these 3
                  hours, your brain is consistently in an "active" state. Even
                  if you are bad at concentrating for a long amount of time now
                  then by doing competitive programming eventually you will see
                  that your concentration is increasing.
                </p>
                <h2>Teamwork</h2>
                <p>
                  When you love doing competitive programming then you form a
                  community of like-minded people all around you. Also, Many
                  contests take place at the individual level and many contests
                  involve team participation. You give a contest in a group of 2
                  or 3. So you start to learn how to approach a situation in a
                  group. Some person has good dynamic programming, some code
                  faster, some think of a solution faster. In this way, you
                  learn to divide the work in a team. It helps when you are
                  working for a company and doing work on a project. coding
                  competition happens at the team level then you form a team and
                  solve a particular problem as a team. At that time you all
                  encountered how good you are at teamwork.
                </p>
                <h2>Makes you more faster and focused</h2>
                <p>
                  You will become faster in every aspect of your life. You start
                  to finish your tasks quickly in your real life as well. This
                  is an excellent skill which you develop. It helps you become
                  more focused as your code gets accepted only when all your
                  test cases pass. So you start developing a habit of analyzing
                  each and every factor which can affect your code. Hence in
                  life also you don’t miss any factor which remains unconsidered
                  easily.
                </p>
                <h2>“Failures” and “Setbacks” becomes part of life</h2>
                <p>
                  Every competitive programmer goes through “The wrong Answer on
                  Pretest …”, “Time limit exceeded”, “ Runtime Error”,
                  “Compilation Error”, “Presentation Error”, “Segmentation
                  Fault”, “Memory limit exceeded” and other limitations. This is
                  where we get a chance to grow by finding our faults, mistakes,
                  bugs and probably get “Accepted” if everything goes well.
                  Therefore, as we keep on practicing, these failures become
                  part of life. Those who never give up ultimately succeed.
                </p>
                <h2>It’s fun</h2>

                <p>
                  Like joining an amateur sports league to get exercise,
                  participating in programming competitions to get better at
                  programming provides built-in motivation. Keeping an eye on
                  the leaderboards and looking forward to facing off against
                  your peers is a way to encourage consistent practice. The
                  happiness when you got your submission accepted on the first
                  attempt is very true.
                </p>
                <h3>
                  Finally, I say that competitive programming is the sport of
                  the mind and like all other sports, it needs a lot of practice
                  and consistency to be good at it.
                </h3>
              </div>
            </div>
            <div className="article_footer">
              <div className="article_tag">
                <div className="tags post-tag">
                  <span className="tag_icon">
                    <FaTag /> TAGS
                  </span>
                  <span>
                    {["Competitive Programming", "C++", "Python", "Java"].map(
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
              leftarticle={" "}
              leftimage={" "}
              rightarticle={
                "Which programming language would be best among Python Java and Cpp"
              }
              rightimage={"Posters/Languages.png"}
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
              <SearchPost date={date}/>
            </div>
          </div>
        </div>
      </div>
      <Card likedblog={likedblog} />
    </>
  );
};

export default Competitive;
