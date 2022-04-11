import React from "react";
import "./Single.css";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { deleteSinglePost } from "../../actions/postActions";
import { useNavigate } from "react-router-dom";

const Single = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { _id, title, description, image, author, createdBy } = props.post;
   console.log("User details", user);
   console.log("Post in Single Post", _id, author, createdBy, user._id);
  const handleDelete = (id) => {
    try {
      dispatch(deleteSinglePost(id));
      // dispatch(allPosts());
      navigate("/");
    } catch (error) {}
  };

  const handleEdit = (e) => {
    navigate(`/post/edit-post/${_id}`);
  };
  return (
    <div className="single">
      {image && (
        <img className="post-img" src={image} alt="Details about post"></img>
      )}
      <h2 className="post-title"> {title} </h2>
      <div className="post-info">
        <p className="author">
          Author:
          <span>
            &nbsp;
            <Link className="link" to={`/?author=${createdBy}`}>
              {author}
            </Link>
          </span>
        </p>
        {user._id === createdBy && (
          <>
            <div className="post-icons">
              <FiEdit className="icons edit-icon" onClick={handleEdit}>
                {" "}
              </FiEdit>
              <FiTrash
                className="icons delete-icon"
                onClick={(e) => handleDelete(_id)}
              />
            </div>
          </>
        )}
      </div>
      <p className="single-postDesc"> {description} </p>
    </div>
  );
};

export default Single;
