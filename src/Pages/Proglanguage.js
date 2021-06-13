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

const Proglanguage = () => {
  const date = new Date("10-06-2021");
  const title =
    "Which programming language would be best among Python, Java and C++ ? ";

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
                    <img src={"Posters/Languages.png"}></img>
                  </div>
                  <span class="image_caption overlay">{title}</span>
                </div>
              </header>
            </div>

            <div className="content_body content">
              <p>
                With technology infiltrating our day to day life, computer
                programming has become an important skill to master. The
                existence of several programming languages confuses students
                about which one they should pick. If you are going through the
                same, this article will help you out.
                <br></br>
                <br></br>
                This article will discuss about{" "}
                <b>
                  Which programming language would be best among Python, Java
                  and C++ ?
                </b>{" "}
                <br></br>
                Python, Java and C++ are among the most popular programming
                languages but choosing the best among these three is a tough
                task.
              </p>
              <div>
                <h2>Python</h2>
                <p>
                  Python is an interpreted language which means it is run line
                  by line unlike C++ which compiles the whole code and is then
                  executed. It is dynamically typed language, that means,
                  programmers need not give the data type a variable is holding.
                  Data type of variables can change during runtime. Since the
                  data type of a variable needs to be determined every time it
                  is used, it slows down python programs. A typical Python
                  program is 4-5 times shorter than C++ and 2-3 times shorter
                  than a Java program.
                </p>
                <h3>Pros</h3>
                <ul className="unbloglist">
                  <li>Easier to learn</li>
                  <li>Easy code readability and maintainability</li>
                  <li>
                    Wide range of libraries and frameworks support making it a
                    versatile language
                  </li>
                  <li>It is an Object Oriented Programming language</li>
                  <li>Highly Productive</li>
                </ul>
                <h3>Cons</h3>
                <ul className="unbloglist">
                  <li>Slower than Java and C++</li>
                  <li>
                    Not suitable for developing high performance applications
                  </li>
                  <li>
                    Not suitable for building Mobile and front end applications
                  </li>
                  <li>Error only shows during runtime</li>
                </ul>
                <h2> Java</h2>
                <p>
                  It is among the most popular programming languages. Java is
                  statically typed language which means that data type of
                  variable must be mentioned while declaring the same. Data type
                  cannot be changed during runtime. Java makes pure
                  implementation of OOP (Object Oriented Programming) meaning
                  everything in Java is associated with an object. Java follows
                  the philosophy of "Write Once, Run Anywhere" because all Java
                  codes are run in JVM (Java Virtual Machine). So any device
                  installed with JVM is capable of running Java code.{" "}
                </p>
                <h3>Pros</h3>
                <ul className="unbloglist">
                  <li>Strictly follows OOP characteristic</li>
                  <li>Platform Independent</li>
                  <li>Multithreading support enabling parallel processing</li>
                  <li>Automatic garbage collection</li>
                </ul>
                <h3>Cons</h3>
                <ul className="unbloglist">
                  <li>Slower than compiled languages like C++</li>
                  <li>No support for low level programming</li>
                  <li>Memory expensive</li>
                </ul>
                <h2> C++</h2>
                <p>
                  C++ is the successor of C which included the concept of OOP.
                  It is a compiled and statically typed language. C++ program is
                  directly converted to machine code and therefore it is fastest
                  among all three languages. C++ is one of the oldest and most
                  popular programming languages.{" "}
                </p>
                <h3>Pros</h3>
                <ul className="unbloglist">
                  <li>High performance , Faster than most languages</li>
                  <li>Object Oriented Programming language</li>
                  <li>Low Level manipulation</li>
                  <li>Rich library support</li>
                  <li>Scalable</li>
                </ul>
                <h3>Cons</h3>
                <ul className="unbloglist">
                  <li>Hard to learn</li>
                  <li>No garbage collector</li>
                  <li>
                    Less secure because of pointers, references and global
                    variables
                  </li>
                </ul>
                <p>
                  To choose the best amount rest,this article is deals with
                  following three factors
                </p>
                <ol className="olbloglist">
                  <li>Objective - Learning to Code or Building Application</li>
                  <li> Popularity</li>
                  <li> Salary</li>
                </ol>
                <h2>Objective</h2>
                <h3>Learning</h3>
                <p>
                  If you are a beginner and your objective is to learn to code
                  then you can start with either Python or Java. Because of
                  dynamic typing and shorter code Python is easier to learn.
                  Java features automatic garbage collection so you don't need
                  to deallocate memory or deal with dangling pointers unlike
                  C/C++. Java is flexible and portable. It is platform
                  independent. These factors make Java significantly easier to
                  learn than C++. However if you are interested in learning how
                  computers work while programming then C++ may be the best
                  choice. C++ is a low level programming language and can help
                  you understand procedural programming and the concept of
                  pointers and references. However, C++ is not very welcoming to
                  newcomers and takes time to master.
                  <br></br>
                  <br></br>
                  If you want to get into the world of Competitive Programming
                  then you should learn Java or C++. Python, because of its slow
                  speed can exceed the time limit for a few questions and hence
                  is less preferred among competitive programmers. C++’s
                  Standard Template Library (STL) has made it the most popular
                  language in Competitive Programming.
                  <br></br>
                  <br></br>
                  So the preferred order is <b>Python then Java then C++</b>
                </p>
                <h3>Building applications</h3>
                <h4>Python</h4>{" "}
                <p>
                  Python is a versatile language. It’s wide range of packages
                  make it useful for building almost any application. Python’s
                  web framework Django is one of the most popular backend
                  frameworks. Frameworks such as Tensorflow, Pytorch, Keras and
                  NumPy make it the top pick among Machine Learning / Artificial
                  Intelligence engineers and Data Analysts, no language comes
                  closer. It is also used for programming web parsers /
                  scrappers and automation apps.
                </p>
                <h4>Java</h4>{" "}
                <p>
                  From server-side applications to mobile apps Java has powered
                  the IT industry for a long time. Java’s Spring framework is
                  used to build backend applications. It has been the official
                  language for app development till 2017 when it was replaced by
                  Kotlin which is interoperable with Java code and runs on JVM.
                  It is also used to build desktop GUI Applications and Network
                  Security Applications.
                </p>
                <h4>C++ </h4>{" "}
                <p>
                  C++ is a very powerful language. Since it is closest to metal,
                  it is extremely fast and efficient. C++ is used to build low
                  level applications and applications which require high
                  performance. Almost all major operating systems are fully or
                  partly written in C/C++. It is used for embedded programming,
                  blockchain core development, and banking applications. All
                  major databases MySQL, Postgres, mongoDB, etc. are built using
                  C++. Because of its speed C++ is also popular among game
                  developers and is one of the primary languages used in game
                  development.
                </p>
                <h2>Popularity</h2>
                <p>
                  Popularity of a programming language is heavily driven by
                  demand for the technologies they are used in. According to the
                  StackOverflow survey of 2020 Python, Java and C++ are among
                  the top 10 most popular programming languages. Here is a
                  comparison of the popularity of programming languages over the
                  years.
                </p>
                <img src="./Blogsimages/languages.png"></img>
                <p>
                  Because of the rise in ML/AI, data science Python has
                  overtaken Java as visible. Python’s ease of learning and
                  availability of a wide variety of packages has also
                  contributed to this factor. Since C++ code is detailed and
                  hard to learn and maintain, newcomers turn towards easier
                  languages like Python and Java.
                </p>
                <h2>Salary</h2>
                <p>
                  Programmers are handsomely paid around the world. But
                  depending on technologies and hence programming language they
                  work with, their salary may vary. This can be a driving factor
                  for you in choosing your language. After all, you are learning
                  to earn! Here is the result of average salary paid to
                  developers worldwide categorised on the basis of language they
                  work with according to StackOverflow developer survey 2020
                </p>
                <img src="./Blogsimages/lang_salary.png"></img>
                <h2>Summary</h2>
                <p>If you are a beginner and want to learn programming or if you are interested in Machine Learning, Artificial Intelligence, Data science, Backend development, web scraping or task automation go for Python,For Android and Desktop application development Java is a good choice. Go for C++ if interested in building high performance software and embedded system programming.
</p>
              </div>
            </div>
            <div className="article_footer">
              <div className="article_tag">
                <div className="tags post-tag">
                  <span className="tag_icon">
                    <FaTag /> TAGS
                  </span>
                  <span>{["Best Programming Languages", "C++", "Python", "Java"].map(
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
              leftarticle={"Advantages of Competitive Programming"}
              leftimage={"Posters/CP.png"}
              rightarticle={
                "Should I learn Web Development"
              }
              rightimage={"Posters/Web-Development.png"}
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

export default Proglanguage;
