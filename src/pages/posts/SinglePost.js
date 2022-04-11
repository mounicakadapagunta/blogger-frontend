import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import Single from "./Single";
import { getSinglePost } from "../../actions/postActions";

const SinglePost = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { id } = params;
  const { singlePost } = useSelector((state) => state.post);

  // console.log("Single Post ID", id);
  useEffect(() => {
    console.log("Before dispatchin sigle post", id);
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  // console.log("Single Post", singlePost);
  return (
    <>
      <div className="home">
        <Single post={singlePost} />
        <Sidebar />
      </div>
    </>
  );
};

export default SinglePost;
