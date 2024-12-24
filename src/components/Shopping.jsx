import React from "react";
import { useState , useEffect } from "react";
import shoppingProduct0 from '/src/images/shoppingProduct0.jpg'
import shoppingProduct1 from '/src/images/shoppingProduct1.jpg'
import shoppingProduct2 from '/src/images/shoppingProduct2.jpg'
import shoppingProduct3 from '/src/images/shoppingProduct3.jpg'
import shoppingProduct4 from '/src/images/shoppingProduct4.jpg'
import product1 from '/src/images/product1.jpg'
import product2 from '/src/images/product2.jpg'
import product3 from '/src/images/product3.jpg'
import DeleteBtn from '/src/images/DeleteBtn.png'
import "./Shopping.css";
import Navbar from './Navbar.jsx'
import Footer from "./Footer.jsx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Shopping (){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(1);

    function increaseQuantity(itemId) {
        setCart(cart.map(item => 
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }
    
    function decreaseQuantity(itemId) {
        setCart(cart.map(item => 
            item.id === itemId && item.quantity > 1 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
        ));
    }

    
    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal.toFixed(2));
        }, [cart]);
        
    function Checkout() {
        if (total == 0) {
            window.alert("Your cart is empty");
        } else {
            const userConfirmed = window.confirm(
                `Are you sure you want to checkout your cart with a total of $${total.toFixed(2)}?`
            );
            if (userConfirmed) {
                window.alert("Checkout Successful");
                setCart([]);
                setTotal(0); 
            }
        }
    }

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    
    const items = [
        {id: 1, name: "ETHOPIA ", image: shoppingProduct0, price: 10},
        {id: 2, name: "GUATAMALA", image: shoppingProduct1, price: 20},
        {id:3,  name: "KENYA", image: shoppingProduct2,  price: 30},
        {id:4, name:  "HONDU ", image: shoppingProduct3, price:40},
        {id:5, name:  "SOLI", image: shoppingProduct4, price: 50},
        {id:6, name:  "COLOMBIA", image: product1, price: 60},
        {id:7, name:  "ALLEGRO", image: product2, price:70},
        {id:8, name:  "PEACE COFFEE", image: product3, price: 80}
    ];

    function addToCart(item) {
        if (!cart.some(cartItem => cartItem.id === item.id)) {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    }

    function removeFromCart(itemId) {
        setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }

    return(
        <div className="shopping-cart">
            <div className="shopping-cart-hero">
                <Navbar/>    
                <h1 id = "hero-text">Shop our Coffee!</h1>
            </div>     

            <div className="shopping-cart-container">
                <h1>The Brew Lab Roasts</h1>
                
                <Carousel responsive={responsive} className="shopping-cart-products">
                    {items.map((item) => (
                        <div key={item.id} className="shopping-cart-product">
                            <img src={item.image} alt={item.name} id="shopping-image" />
                            <h2 id="shopping-name">{item.name}</h2>
                            <p id="shopping-price">Price: ${item.price}</p>
                            <button onClick={() => addToCart(item)} id="add-to-cart-btn">Add to Cart</button>
                            </div>
                            ))}
                </Carousel>
            </div>
            <div className="cart">
                <h1 >Your Shopping cart</h1>
                <div id="cart-header">
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
                </div>
                { cart.length !== 0 ? (cart.map((item)=>(
                    <div  key = {item.id} className="cart-products">
                            <div id="cart-product">
                                <img src={item.image} alt={item.name} id="cart-image"/> 
                                <h2 id="cart-name">{item.name}</h2>
                            </div>
                            <div id="cart-quantity">
                            <span onClick={() => increaseQuantity(item.id)}>+ </span>
                                                        {item.quantity}
                            <span onClick={() => decreaseQuantity(item.id)}> -</span>
                             </div>
                             <img
                            src={DeleteBtn}
                            alt="Delete button"
                            id="delete-btn"
                            onClick={() => removeFromCart(item.id)}
                        />
                                 <p id="cart-price">${item.price * item.quantity}</p>
                    </div>
                ))
            ):(
                <p id="empty-cart-msg">Your cart is empty</p>
            )}
                <div id="bottom-border"></div>

                <div className="total">
                    <div>Estimated Total: ${total}</div>
                </div>
                <div className="payment-btns">
                    <button id="checkout-btn" onClick={Checkout}>Checkout</button>
                </div>
            </div>

                <Footer/>
        </div>
    )
}