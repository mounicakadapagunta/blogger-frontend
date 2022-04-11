import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  uploadImage,
  createPost,
  updatePost,
} from "../../services/post.service";
import "./Write.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Write = () => {
  const navigate = useNavigate();
  const postId = useParams().postId;
  // const dispatch = useDispatch();
  const { singlePost } = useSelector((state) => state.post);

  // console.log(singlePost, useParams());
  let stateObj = { title: "", desc: "", file: null, categories: "" };
  const initialState = {
    title: "",
    categories: "",
    desc: "",
    file: null,
  };

  if (postId) {
    stateObj["title"] = singlePost.title;
    stateObj["desc"] = singlePost.description;
    stateObj["file"] = singlePost.image;
  } else {
    stateObj = initialState;
  }

  const [state, setState] = useState(stateObj);

  // Handling the Submit request
  const handleSubmit = async (e) => {
    const post = {};
    e.preventDefault();

    post["title"] = state.title;
    post["description"] = state.desc;
    post["categories"] = state.categories;

    // console.log("File", state.file);

    if (state.file && !postId) {
      const formData = new FormData();
      formData.append("myImage", state.file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      console.log("before upload", formData);
      try {
        const result = await uploadImage(formData, config);
        console.log(result);
        const imageUrl = result.data.imageUrl;
        post["image"] = imageUrl;
      } catch (error) {
        console.log(error);
      }
    }

    // Sending the request to backend
    if (postId) {
      post["image"] = state.image;
      try {
        const res = await updatePost(postId, post);
        // console.log("Post result", res);
        if (res.status === 200) {
          navigate("/");
        }
      } catch (error) {}
    } else {
      try {
        const res = await createPost(post);
        console.log("Post result", res);
        if (res.status === 201) {
          navigate("/");
        }
      } catch (error) {}
    }
  };
  let postImage = "";

  if (postId) {
    postImage = state.file;
  } else if (state.file) {
    // Setting the post Image only if state value exists
    postImage = URL.createObjectURL(state.file);
  }
  // console.log("PostId", postId, state);
  return (
    <div className="write-page">
      {state.file && <img className="write-img" src={postImage} alt=""></img>}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-group">
          <label htmlFor="upload">
            <FiPlus className="write-icon" />
          </label>
          <input
            type="file"
            name="upload"
            id="upload"
            className="file-upload"
            onChange={(e) => setState({ ...state, file: e.target.files[0] })}
          />
          <input
            type="text"
            name="write-title"
            placeholder="Title"
            className="write-text write-title"
            value={state.title}
            autoFocus={true}
            onChange={(e) => setState({ ...state, title: e.target.value })}
          ></input>
        </div>
        <div className="write-group">
          <input
            type="text"
            name="write-category"
            className="write-text"
            placeholder="Category"
            value={state.categories}
            onChange={(e) => setState({ ...state, categories: e.target.value })}
          />
        </div>
        <div className="write-group">
          <textarea
            name="write-story"
            className="write-text write-textArea"
            cols="40"
            rows="10"
            placeholder="Tell your Story"
            value={state.desc}
            onChange={(e) => setState({ ...state, desc: e.target.value })}
          ></textarea>
        </div>
        <button className="btn write-btn">
          {postId ? "Update Post" : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default Write;
