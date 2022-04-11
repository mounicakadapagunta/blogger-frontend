import React, { useEffect } from "react";
import "./Sidebar.css";
import { getAllCategories } from "../../actions/postActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.post);

  // Getting all the Posts
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <p className="sidebar-title"> About me </p>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p className="about-desc">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebar-item">
        <p className="sidebar-title"> categories </p>
        <ul className="cat-lists">
          {categories.map((el, index) => {
            return (
              <li key={index}>
                <Link className="link" to={`/?categories=${el.name}`}>
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-item">
        <p className="sidebar-title"> follow us </p>
        <ul className="cat-lists">
          <li>
            <FiFacebook className="icons social-icon" />
          </li>
          <li>
            <FiTwitter className="icons social-icon" />
          </li>
          <li>
            <FiLinkedin className="icons social-icon"> </FiLinkedin>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
