import React from "react";
import Aboutimg2 from "../images/Aboutimg2.jpg"
import About from "../images/About.jpg"
import Footer from "./Footer";
import "./AboutUs.css"
import Navbar from "./Navbar";


export default function AboutUs (){
    return (
        <div className="aboutus">
            <div className="aboutus-hero">
                <Navbar />
                <div className="aboutus-hero-content">
                    <p>About The Brew Lab</p>
                </div>
            </div>
            
            <div className="About-info">
                <img src={Aboutimg2} id="About-us-info-img" alt="" />
                <div id="about-info-text">
                    <h1>About Us</h1>
                    <p>
                    The Brew Lab Café, where passion for coffee meets creative innovation. Nestled in the heart of the city, <br/>
                    we pride ourselves on crafting exceptional coffee experiences. From expertly brewed espressos to creamy lattes,<br/>
                    our menu celebrates the finest blends and freshest ingredients.<br/>
                    But we’re more than just coffee. The Brew Lab Café is a cozy haven where you can relax, connect, and feel inspired.<br/>
                    Whether you’re meeting friends, working remotely, or simply savoring some “me time,” our warm and welcoming atmosphere <br/>
                    is your perfect retreat. We believe in sustainability and supporting our community. <br/>
                    That’s why we source our coffee beans ethically and partner with local artisans to bring you fresh pastries and snacks. <br/>
                    Every visit to The Brew Lab Café is an opportunity to experience comfort, quality, and creativity in a single cup.<br/>
                    Come in, unwind, and discover your next favorite brew.<br/>
                    </p>
                </div>
            </div>

            <div className="cafe">
            <div className="cafe-info">
                    <h1>Our Café</h1>
                    <p>
                    Immerse yourself in a warm and inviting space where rustic charm meets modern design.<br/>
                    With its cozy wooden accents, soft lighting, and vibrant greenery, The Brew Lab Café <br/>
                    is the perfect blend of comfort and style. <br />
                    Whether you're here to relax or recharge, the laid-back vibe, soothing music, and aroma <br/>
                    of freshly brewed coffee make every moment unforgettable.
                    </p>
                </div>
                <img src={About} id="cafe-img" alt=""/>
            </div>

            <div className="section2">
            <div className="buttons">
                <a href='#'><button className='button'>Shop Coffee</button></a>
                <a href='#'><button className='button'>Contact us</button></a> 
                </div>
            </div>

            <Footer />

        </div>

    )
}