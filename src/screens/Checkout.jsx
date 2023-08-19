import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getToken, placeOrder } from '../redux/apiCalls';

const Checkout = () => {

    const cart =  useSelector(state=>state.cart)
    const user= useSelector(state=>state.user.currentUser)
    const navigate = useNavigate();
    const productsCount = cart.products.length;
    
    const deliveryFee = 30;
    const discount = 100;
    const finalOrderAmount=cart.cartTotal+deliveryFee-discount;

    const handleOrder=async(e)=>{
        e.preventDefault();
        const order={
            products:cart.products,
            amount:finalOrderAmount,
            address:user.address
        }

        try {
            const res= await axios.post("/api/order",order,{
                headers:{"Authorization":"Bearer "+getToken()}
            })
            navigate("/order/success")
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='checkout'>
        <Navbar />

        <div className="checkoutContainer">
            <div className={`checkout-left`}>
                <div className="checkout-left-Header">
                    <h1 className="checkout-left-title">
                        Select Delivery Address
                    </h1>
                    <div className='checkout-left-subtitle'>Saved Address</div>
                </div>
                
                <div className="checkout-left-addressContainer">
                    <div className="checkout-address-name">
                        {user.fullname}
                    </div>
                    <div className="checkout-address-info">
                        {user.address.doorStreet}
                    </div>
                    <div className="checkout-address-info">
                        {user.address.district}, {user.address.state}-{user.address.pincode}
                    </div>
                    <div className="checkout-address-contact">
                        Mobile: {user.address.district}
                    </div>
                    <button className="checkout-address-changeBtn">
                        CHANGE ADDRESS
                    </button>
                </div>

                    
            </div>
                        
            {
                productsCount>0 &&

                <div className="checkout-right">
                
                    <h1 className="checkout-right-title">
                        Order Details
                    </h1>
                    <div className="checkout-right-item">
                        <p className="checkout-right-item-title">
                            Price <span>({productsCount} {productsCount>1? "items":"item"})</span>
                        </p>
                        <p className="checkout-right-item-value">
                            ₹{cart.cartTotal}
                        </p>
                    </div>
                    <div className="checkout-right-item">
                        <p className="checkout-right-item-title">
                            Delivery Fee
                        </p>
                        <p className="checkout-right-item-value">
                            ₹{deliveryFee}
                        </p>
                    </div>
                    <div className="checkout-right-item">
                        <p className="checkout-right-item-title">
                            Discount
                        </p>
                        <p className="checkout-right-item-value green">
                            -₹{discount}
                        </p>
                    </div>
                    <div className="checkout-right-divider">
                    </div>
                    
                    <div className="checkout-right-item total">
                        <p className="checkout-right-item-title total">
                            Order Total
                        </p>
                        <p className="checkout-right-item-value total">
                            ₹{finalOrderAmount}
                        </p>
                    </div>
                    
                    <button className="checkout-right-btn" onClick={handleOrder}>
                        PLACE ORDER
                    </button>


                </div>
            }
            
        </div>
        </div>
  )
}

export default Checkout