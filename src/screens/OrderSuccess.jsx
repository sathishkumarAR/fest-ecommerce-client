import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const OrderSuccess = () => {
  return (
    <div>
        <Navbar />
        <div className="orderSuccess-wrapper">
            <div className="orderSuccessContainer">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" 
                    alt="" 
                    className="orderSuccess-icon" 
                />
                <div className="orderSuccess-info">
                    <h3 className="orderSuccess-title">
                        Order placed Successfully!
                    </h3>
                    <p>Your order ID is: 6sahsuas5wyushqu76</p>
                    <p>You will receive a confirmation email with details of your order</p>
                    <Link to="/">
                        <button className="orderSuccess-btn">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderSuccess