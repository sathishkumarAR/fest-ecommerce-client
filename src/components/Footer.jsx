import { Call, Facebook, Instagram, MailOutline, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>

        <div className="footer-left">
            <h1 className="logo">
                FEST.
            </h1>
            <p className="footer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut obcaecati minus harum unde necessitatibus ab. At fugiat corrupti nulla? Possimus odio porro sequi exercitationem veritatis non quia qui.
            </p>
            <div className="socialContainer">
                <div className="socialIcon" style={{backgroundColor:"#3B5999"}}>
                    <Facebook />
                </div>
                <div className="socialIcon" style={{backgroundColor:"#E4405F"}}>
                    <Instagram />
                </div>
                <div className="socialIcon" style={{backgroundColor:"#55ACEE"}}>
                    <Twitter />
                </div>
                <div className="socialIcon" style={{backgroundColor:"#E60023"}}>
                    <Pinterest />
                </div>
            </div>
        </div>

        <div className="footer-center">
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>My Account</li>
                <li>Cart</li>
                <li>Help</li>
                <li>Orders</li>
                <li>Careers</li>
                <li>Accessories</li>
                <li>Terms</li>
                <li>Wishlist</li>
                <li>Privacy</li>
            </ul>
        </div>

        <div className="footer-right">
            <h3>Contact</h3>
            <div className="contactItem">
                <Room style={{marginRight:"10px"}}/>
                644 New Street, Adyar, Chennai - 600025
            </div>
            <div className="contactItem">
                <Call style={{marginRight:"10px"}} />
                044 23909212
            </div>
            <div className="contactItem">
                <MailOutline style={{marginRight:"10px"}}/>
                contact@fest.com
            </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
    </div>
  )
}

export default Footer