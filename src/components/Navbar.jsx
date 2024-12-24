import React from "react";
import logo from '../images/logo.png'
import BurgerMenu from "./BurgerMenu";
import { Link, Outlet } from "react-router-dom";

export default function Navbar(){

    return (
        <div className="navbar">
            <Link to="/">
                <div className="logo">
                 <img src={logo} alt="" />
                    <p>The Brew Lab</p>
                </div>
                </Link>
                <BurgerMenu className="burger-menu"/>
             <Outlet/>
            </div>
    )
}