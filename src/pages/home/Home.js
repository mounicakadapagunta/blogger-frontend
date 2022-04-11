import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../posts/Posts";
import "./Home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { search } = useLocation();

  // console.log("In HOME Component");
  return (
    <>
      <Header />
      <div className="home">
        <Posts search={search} /> <Sidebar />
      </div>{" "}
    </>
  );
};

export default Home;
