import React from "react";
// import { updatePost } from "../../services/post.service";
import "./Posts.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { img, title, desc, categories, updated, id } = props;
  return (
    <div className="post">
      <img src={img} alt="Post" />
      <div className="postInfo">
        {categories.map((el, index) => {
          return (
            <Link
              className="link"
              to={`/?categories=${categories}`}
              key={index}
            >
              <span key={index} className="post-category">
                {el}
              </span>
            </Link>
          );
        })}
      </div>
      <p className="post-title">
        <Link className="link" to={`/post/${id}`}>
          {title}
        </Link>
      </p>
      <span className="post-date"> {new Date(updated).toDateString()} </span>
      <p className="post-desc"> {desc} </p>
    </div>
  );
};

export default Post;
