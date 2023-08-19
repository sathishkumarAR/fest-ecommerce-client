import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({img,title,category}) => {
  return (

    <div className='catItem-container'>

        <img src={img} alt="" className="cat-img" />
        
        <div className="cat-info">
            <h1 className="cat-title">
                {title}
            </h1>
            <Link to={"products/"+category}>
              <button className="cat-btn">
                  SHOP NOW
              </button>
            </Link>
        </div>
        
    </div>
  )
}

export default CategoryItem