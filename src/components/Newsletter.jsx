import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <h1 className="newsletter-title">
            Newsletter
        </h1>
        <div className="newsletter-desc">
            Get timely updates from your favourite products.
        </div>
        <div className="newsletter-inputContainer">
            <input placeholder='Your Email' type="text" className="newsletter-input" />
            <button className="newsletter-btn">
                SUBSCRIBE
            </button>
        </div>
    </div>
  )
}

export default Newsletter