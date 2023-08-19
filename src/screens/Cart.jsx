import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {

   const cart =  useSelector(state=>state.cart)
    const user= useSelector(state=>state.user.currentUser)

    const productsCount = cart.products.length;
    
    const deliveryFee = 30;
    const discount = 100;

  return (
    <div className='cart'>
        <Navbar />
        <div className="cartContainer">
            <div className={`cart-left ${(productsCount>0 ? "not-empty":"empty")}`}>
                {
                    productsCount >0
                    ?
                    (
                        <>
                        <div className="cart-left-Header">
                            <h1 className="cart-left-title">
                                Shopping Cart
                            </h1>
                            <Link to="/" className='link'>
                                <span className="cart-continueShopBtn">
                                    Continue Shopping
                                </span>
                            </Link>

                        </div>
                       
                        {
                            
                            cart.products.map((product,index)=>

                                <CartItem 
                                    img = {product.img}
                                    title = {product.title}
                                    productID = {product._id}
                                    size = {product.selectedSize}
                                    color = {product.selectedColor}
                                    quantity = {product.quantity}
                                    price = {product.sellingPrice}

                                    key={index}
                                />
                            
                            )
                        }

                        </>
                    )
                    :
                    (
                        <div className="emptyCart-container">
                            <img 
                                src="https://res.cloudinary.com/wings06/image/upload/v1671353390/ecommerce-fest/empty-box_jtaaqa.png" 
                                alt="" 
                                className='emptyCart-img'
                            />
                            <h3 className="emptyCart-title">
                                Hey, your cart is empty!
                            </h3>
                            {
                                user ?
                                <p className="emptyCart-subtitle">
                                    Let's add some items
                                </p>
                                :
                                <div className="emptyCart-subtitle">
                                    <Link to="/login" className='link emptyCart-link'>Login </Link>
                                    to your account to see the items already added, 
                                    <div>or add new items</div>
                                </div>
                                
                            }
                            <Link to="/" className='link'>
                                <button className="emptyCart-btn">
                                    SHOP NOW
                                </button>

                            </Link>
                            
                        </div>
                    )
                }

                    
            </div>
                        
            {
                productsCount>0 &&

                <div className="cart-right">
                
                    <h1 className="cart-right-title">
                        Order Details
                    </h1>
                    <div className="cart-right-item">
                        <p className="cart-right-item-title">
                            Price <span>({productsCount} {productsCount>1? "items":"item"})</span>
                        </p>
                        <p className="cart-right-item-value">
                            ₹{cart.cartTotal}
                        </p>
                    </div>
                    <div className="cart-right-item">
                        <p className="cart-right-item-title">
                            Delivery Fee
                        </p>
                        <p className="cart-right-item-value">
                            ₹{deliveryFee}
                        </p>
                    </div>
                    <div className="cart-right-item">
                        <p className="cart-right-item-title">
                            Discount
                        </p>
                        <p className="cart-right-item-value green">
                            -₹{discount}
                        </p>
                    </div>
                    <div className="cart-right-divider">
                    </div>
                    
                    <div className="cart-right-item total">
                        <p className="cart-right-item-title total">
                            Order Total
                        </p>
                        <p className="cart-right-item-value total">
                            ₹{cart.cartTotal+deliveryFee-discount}
                        </p>
                    </div>
                    <Link to="/checkout/address">
                        <button className="cart-right-btn">
                            CHECKOUT
                        </button>

                    </Link>


                </div>
            }
            
        </div>
        <Footer />

    </div>
  )
}

export default Cart