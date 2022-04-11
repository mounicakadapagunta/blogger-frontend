import React, { useEffect } from "react";
import Post from "./Post";
import "./Posts.css";
import { allPosts } from "../../actions/postActions";

import { useDispatch, useSelector } from "react-redux";

const Posts = ({ search }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  // Getting all the Posts
  useEffect(() => {
    // console.log("Before dispatching Posts");
    dispatch(allPosts(search));
  }, [dispatch, search]);

  const postsArray = posts.map((post) => {
    return (
      <Post
        key={post._id}
        title={post.title}
        desc={post.description}
        categories={post.categories}
        createdBy={post.createdBy}
        updated={post.updatedAt}
        img={post.image}
        id={post._id}
      />
    );
  });

  // console.log("Posts", posts);
  return <div className="posts"> {postsArray} </div>;
};

export default Posts;
