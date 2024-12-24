import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-container">
            <button className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-links ${isOpen ? "visible" : ""}`}>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Shop"><li>Shop</li></Link>
                <Link to="/About"><li>About us</li></Link>
                <Link to="/Contact"><li>Contact Us</li></Link>
            </ul>
        </div>
    );
}
 