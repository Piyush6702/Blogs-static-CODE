import React from "react";
import { FaEdit } from "react-icons/fa";
import {Link} from "react-router-dom";
import {allblogs} from "../allblogs";
import "../Individual Blog/blog.css";

function SearchPost(props) {
    // console.log(allblogs[0].title)
  return (
    <div className="widget">
      <h2 className="recent_widget recent_post">Recent Post</h2>

      <ul>
        {allblogs.map((recents, index) => 
          <li key={index}>
            <Link id="link" to={recents.path}>
              <FaEdit />
              &nbsp;{recents.title}
            </Link>
            <span className="post-date">{props.date.toLocaleDateString()}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SearchPost;
