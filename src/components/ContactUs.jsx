import React from "react";
import Navbar from "./Navbar";
import "./ContactUs.css"
import Footer from "./Footer";
export default function ContactUs (){

    return(
        <div className="contactUs">
            <div className="contactUsHero">
                <Navbar />
                <h1>Contact Us</h1>
            </div>

<p id="contact-txt">Please reach out to Tofino Coffee for more information about wholesale, roasting, or any other project we may be able to help with. We're always happy to chat.</p>

            <div className="contact-us-info">
                <h2>Contact The Brew Lab</h2>
                <div className="contact-inputs">
                    <input type="text" id="name" placeholder="Name" required/>
                    <input type="email" id="email" placeholder="Email" required/>
                    <input type="tel" id= "number" placeholder="Phone Number" required />
                    <input type="text" id="comment" placeholder="Comment" required />
                </div>
                <button className="send-btn">Send</button>
            </div>

                <Footer/>
        </div>
    )
}