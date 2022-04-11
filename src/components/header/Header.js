import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <h3 className="smallTitle"> Welcome to the simple blog</h3>{" "}
        <h1 className="largeTitle"> Explore </h1>{" "}
      </div>
    </div>
  );
};

export default Header;
