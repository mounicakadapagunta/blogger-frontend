import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { FiSearch } from "react-icons/fi";

import "./Navbar.css";
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);

    const handleLogout = async (e) => {
        console.log("DIspatching LOGOUT");
        dispatch(logoutUser());
        navigate("/");
    };

    const toggleNavbar = (e) => {
        const burger = document.querySelector(".burger");
        const navLink = document.querySelector(".nav-links");
        const link = document.querySelectorAll(".links li");
        navLink.classList.toggle("nav-active");

        link.forEach((e, index) => {
            if (e.style.animation) {
                e.style.animation = "";
            } else {
                e.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5
                    }s`;
                console.log(index / 5 + 2.3);
            }
        });

        burger.classList.toggle("toggle");
    };
    return (<nav>
        <div className="logo" >
            <NavLink className="link"
                to="/" >
                Simple Blog </NavLink>
        </div>
        <div className="nav-links" >
            <ul className="links links-center" >
                <li >
                    <NavLink className="link"
                        to="/" >
                        Home </NavLink> </li> 
                        < li >
                    {/* <NavLink className="link"
                        to="/" >
                        About </NavLink> </> <li >
                    {/* <NavLink className="link"
                        to="/login" >
                        Contact <
        /NavLink> < */}
                </li>
                 <li > 
                    <NavLink className="link"
                        to="/write" >
                        Write <
        /NavLink> <
        /li> <
        /ul> <
        ul className="links links-right" > {
                                isLoggedIn && ( <
                >
                                    <
                li >
                                        <
                button className="link logout-btn"
                                            onClick={handleLogout} > {" "}
                                            Logout <
                /button> <
                /li> <
                li >
                                                <
                NavLink className="link"
                                                    to="/settings" >
                                                    <
                                                        img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                                        alt="User profile"
                                                        className="user-pic" /
                                                    >
                                                    <
                /NavLink> <
                /li> <
                li >
                                                        <
                                                            FiSearch />
                                                        <
                /li> <
                />
                                                        )
        } {
                                                            !isLoggedIn && ( <
                >
                                                                <
                li >
                                                                    <
                NavLink className="link"
                                                                        to="/login" >
                                                                        Login <
                /NavLink> <
                /li> <
                li >
                                                                            <
                NavLink className="link"
                                                                                to="/register" >
                                                                                Register <
                /NavLink> <
                /li> <
                />
                                                                                )
        } <
        /ul> <
        /div> <
        div className="burger"
                                                                                    onClick={toggleNavbar} >
                                                                                    <
        div className="line1" > < /div> <div className="line2"> </div >
                                                                                        <
        div className="line3" > < /div> <
        /div> <
        /nav>
                                                                                            );
};

                                                                                            export default Navbar;