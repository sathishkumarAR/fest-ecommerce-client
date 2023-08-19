import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct, handleQuantity, removeProduct } from '../redux/cartSlice'

const CartItem = ({img,title,price,size,color,quantity,productID}) => {

  
  const dispatch = useDispatch();
  const [quantityInCart,setQuantityInCart] = useState();

  useEffect(()=>{
    setQuantityInCart(quantity)
  },[quantity])

  const handleDelete=()=>{
    const totalPrice=(price*quantityInCart);
    dispatch(
      removeProduct({totalPrice,productID,size,color})
    )
  }

  const increaseQuantity=()=>{
    if(quantityInCart<10){
      setQuantityInCart(prev=>prev+1);
      
      dispatch(
        handleQuantity({
          type:"increase",
          selectedColor:color,
          selectedSize:size,
          _id:productID,
          quantity:1
        })
      )
    }
    
  }
  const decreaseQuantity=()=>{

    if(quantityInCart>1){
      setQuantityInCart(prev=>prev-1);

      dispatch(
        handleQuantity({
          type:"decrease",
          selectedColor:color,
          selectedSize:size,
          _id:productID,
          quantity:1
        })
      )
    }

  }

  return (
    <div>
      <div className='ci-container'>
          <Link to={"/product/"+productID} className="link">
            <img src={img} alt="" className="ci-img" />
          </Link>
          <div className="ci-info">
            <Link to={"/product/"+productID} className="link">
              <h1 className="ci-title">{title}</h1>
            </Link>
            <div className='ci-infoItem'>
              <span className="ci-subheading">Product ID:</span> 
              <span>{productID}</span>
            </div>
            <div className='ci-infoItem'>
            <span className="ci-subheading">Size: </span>
            <span>{size}</span>
            </div>
            <div className='ci-infoItem'>
              <span className="ci-subheading">Color: </span>
              <span>{color}</span>
            </div>
            <div className='ci-infoItem m10px-v'>
              <span className="ci-subheading">Quantity: </span>

              <span className="ci-quantityContainer">
                    <span className='ci-remove colorGrey' onClick={decreaseQuantity}>-</span>
                    <span className="ci-quantity">
                      {quantityInCart}
                    </span>
                    <span className='ci-add teal' onClick={increaseQuantity}>+</span>
                  </span>

            </div>

            <div className="ci-moreActions">
              <span className="ci-action" onClick={handleDelete}>
                Delete
              </span>
              <div className='ci-divider'></div>
              <span className="ci-action">
                Add to wishlist
              </span>
              <div className='ci-divider'></div>
              <span className="ci-action">
                See more like this
              </span>
            </div>

          </div>

          <div className="ci-priceContainer">
            <p className='colorGrey'>Price</p>
            <h3 className='ci-price'>₹{price*quantityInCart}</h3>
          </div>
      </div>

      <div className='ci-container-mobile'>

        <div className="ci-mobile-top">

          <div className='ci-mobile-imgContainer'>
            <img src={img} alt="" className="ci-img" />

            <span className="ci-quantityContainer">
                  <span className='ci-remove colorGrey'>-</span>
                  <span className="ci-quantity">
                    2
                  </span>
                  <span className='ci-add teal'>+</span>
            </span>
          </div>

          <div className="ci-info">
            <h1 className="ci-title">{title}</h1>
            <h3 className='ci-price'>₹{price}</h3>
            <div className='ci-infoItem'>
              <span className="ci-subheading">Product ID:</span> 
              <span>{productID}</span>
            </div>
            <div className='ci-infoItem'>
            <span className="ci-subheading">Size: </span>
            <span>{size}</span>
            </div>
            <div className='ci-infoItem'>
              <span className="ci-subheading">Color: </span>
              <span>{color}</span>
            </div>
          </div>

        </div>

        <div className="ci-moreActions">
          <span className="ci-action">
            Delete
          </span>
          <div className='ci-divider'></div>
          <span className="ci-action">
            Add to wishlist
          </span>
          <div className='ci-divider'></div>
          <span className="ci-action">
            See more like this
          </span>
        </div>

        </div>
    </div>
    
  )
}

export default CartItem