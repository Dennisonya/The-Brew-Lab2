import React from "react";
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'

export default function Footer(){

    return(
        <div className='footer'>
        <div id="footer-section">
        <p id="footer-header"><strong>&copy; 2020 Coffee Shop</strong></p>
        <p>The Brew Lab</p>
        </div>
        <div id="footer-section">
        <p id="footer-header"><strong>Socials</strong></p>
        <p><a href='#'><img src={instagram} width="25" height="25"  alt="instagram logo"/></a></p>
        <p><a href='#'><img src={facebook} width="25" height="25"  alt="facebook logo"/></a></p>
        <p><a href='#'><img src={twitter} width="25" height="25"  alt="twitter-logo"/></a></p>
        </div>
        <div id="footer-section">
        <p id="footer-header"><strong>Location</strong></p>
        <p>605 Gibson St, Suite 112 <br />
        Tofino, British Columbia <br />
        V0R 2Z0, Canada</p>
        </div>
        <div id="footer-section">
        <p id="footer-header"><strong> Contact</strong></p>
        <p>0022 6457 3425</p>
        <p><a href='#'>chillBrew@gmail.com</a></p>
        <p><a href="#">BrewCafe@yahoo.com</a></p>
        </div>
        
    </div>
    )
}