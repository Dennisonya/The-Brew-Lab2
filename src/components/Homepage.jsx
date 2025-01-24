import '../index.css'
import About from '../images/About.jpg'
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Link } from "react-router-dom";

export default function Homepage (){
    
    return(
        <div className="homepage">
           
            <div className="hero">
                    <Navbar/>    
                <div className="hero-text">
                    <p className='header'>Welcome to </p>
                    <p className='cafe-header'>The Brew Lab</p>
                    <p className='hero-paragraph'>Where science meets the soul of coffee.
                    Our baristas are innovators, our beans are carefully selected.
                    and every cup is a masterpiece waiting to be savored.
                    Come in, slow down, and let us elevate your coffee journey.</p>
                    <Link to ='About'><button className='hero-button'>Learn More</button></Link>
                </div>
            </div>

            <div className="About-us">
                <div className="about-us-text">
                <h1 className='about-us-text-header'>About Us</h1>
                    <p>
                    Founded in April 2017 by two young man from Yogyakarta,
                    Couvee comes from an idea that everyone can enjoy coffee.
                    It all started at a small rented building on Jalan Kaliurang. By 2019
                     Couvee has 5 branches, one of them located in Jakarta.
                    </p>
                </div>
               <img className='about-us-image'  src={About} alt="" />
            </div>

                <h1 id="product-header">Our Products</h1>
            <div className="products">
                <div className="product-container">
                    <div className="product-image">
                        <img  id="product-image" src={product1} alt="" />
                    </div>
                    <div className="product-details">
                        <h2>Colombia Coffee</h2>
                        <p>Experience the smooth, balanced flavor of Colombia’s finest</p>
                        <br/>
                        <p>Price: $10.99</p>
                        <Link to = 'Shop'><button>Buy Now</button></Link>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image">
                        <img  id="product-image" src={product3} alt="" />
                    </div>
                    <div className="product-details">
                        <h2>Peace Coffee</h2>
                        <p>Brewed with bold flavors to bring comfort and balance to every cup</p>
                        <br/>
                        <p>Price: $15.99</p>
                        <Link to = 'Shop'><button>Buy Now</button></Link>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image">
                        <img  id="product-image" src={product2} alt="" />
                    </div>
                    <div className="product-details">
                        <h2>Allegro Coffee</h2>
                        <p> Delight in the pure, rich flavor of sustainably grown organic coffee.</p>
                        <br/>
                        <p>Price: $13.99</p>
                        <Link to = 'Shop'><button>Buy Now</button></Link>
                    </div>
                </div>
            </div>
{                         /*********Second Hero section *********/                                         }
            <div className='section'>
                <div className="buttons">
               <Link to= 'Shop'><button className='button'>Shop Coffee</button></Link> 
               <Link to='Contact'><button className='button'>Contact us</button></Link>
                </div>
            </div>
{                       /*********Footer Section********/                                                 }
            <Footer/>
           
        </div>
    )
}