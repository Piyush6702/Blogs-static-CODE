import React from "react";
import "./comment.css";
import image from "../../images/image.jpg";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

import { Link } from "react-router-dom";

/**
* @author
* @function Comment

**/

const Comment = (props) => {
  let leftstr = props.leftarticle;
  let modleftstr = leftstr.replaceAll(" ", "-");

  let rightstr = props.rightarticle;
  let modrightstr = rightstr.replaceAll(" ", "-");

  // console.log(leftstr,rightstr,modrightstr)

  return (
    <div className="comment_header">
      <nav className="nav_box nav_link">
        <div className="nav1 nav_pad">
          {leftstr === " " ? (
            <p></p>
          ) : (
            <Link to={modleftstr}>
              <span className="nav-label">
                <i className="icon1"></i>
                <span>
                  <FaAngleLeft />
                  Previous Article
                </span>
              </span>
              <span className="nav_img h4">
                <img
                  style={{ width: 50, height: 50 }}
                  src={props.leftimage}
                  className="img1"
                  alt="No image"
                />

                <span className="tittle">{leftstr}</span>
              </span>
            </Link>
          )}
        </div>

        <div className="nav2 nav_pad">
          {rightstr === " " ? (
            <p></p>
          ) : (
            <Link to={modrightstr}>
              <span className="nav-label">
                <i className="icon2"></i>
                <span>
                  Next Article
                  <FaAngleRight />
                </span>
              </span>
              <span className="nav_img h4">
                <img
                  style={{ width: 50, height: 50 }}
                  src={props.rightimage}
                  className="img1"
                  alt="No image"
                />

                <span className="tittle">{rightstr}</span>
              </span>
            </Link>
          )}
        </div>
      </nav>
      {/* nav bar ends here */}

      {/* Comment form */}

      <aside className="comment_box">
        <div className="comment_box_header clearfix">
          <h4 className="reply">
            <i className="reply_icon"></i>
            Leave a reply
          </h4>
        </div>

        <div className="ContactForm">
          <form>
            <input type="text" required placeholder="Your Name"></input>
            <input type="email" required placeholder="Your Email"></input>
            <input type="number" required placeholder="Contact number"></input>
            <textarea
              required
              placeholder="Type your Comment here*"
              className="textareaContactDetails"
              rows="4"
            ></textarea>
            <div class="form-comment-cookies">
              <span>
                <input type="checkbox" class="checkbox" />
                <label for="comment-cookies">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </span>
            </div>
            <button type="submit " className="btn-hover color-4">
              Post Comment
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default Comment;
