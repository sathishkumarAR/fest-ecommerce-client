import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from '@mui/icons-material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import { logout } from '../redux/userSlice'

const SingleProduct = () => {

  const {productId} =useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();


  useEffect(()=>{
    const getProduct=async()=>{
      try {
        const res =await axios.get(`/api/products/find/${productId}`)
        setProduct(res.data)
      } catch (error) {
        if(error.response.status===401){
          dispatch(logout());
        }
        console.log(error)
      }

    }
    getProduct();
    
  },[productId])


  const addProductToCart=()=>{
    dispatch(
      addProduct({
        ...product,
        quantity,
        selectedColor,
        selectedSize
      })
    )
  }

  return (

    
    <div>
        <Navbar />
        <Announcement />

        
        <div className="sprod-wrapper">

          <div className="sprod-imgContainer">
            <img src={product.img} alt="" className="sprod-img" />
          </div>

          <div className="sprod-infoContainer">
            <h1 className="sprod-title">
              {product.title}
            </h1>
            <h3 className="sprod-subtitle">
               Unisex Denim Jumpsuit with Blue collar
            </h3>

            <p className="sprod-price">
              ₹{product.sellingPrice}
              <span className="sprod-priceMRP">
              ₹1299
              </span>
            </p> 
            
            <div className="sprod-colorContainer">
              <p className="sprod-subheading">
                COLOR
              </p>
              <div className="sprod-colors">
                {
                  product.colors &&
                  product.colors.map((item)=>
                    
                      <div 
                        className={`sprod-color ${item} ${(item===selectedColor) && "active"}`} 
                        key={item}
                        onClick={()=>setSelectedColor(item)}
                      ></div>

                  )
                }
              </div>
            </div>

            <div className="sprod-sizeContainer">
              <p className="sprod-subheading">
                SIZE
              </p>
              <div className="sprod-sizes">
                {
                  product.sizes &&
                  product.sizes.map((item)=>
                    <div 
                      className= {`sprod-size ${(item===selectedSize) && "active"}`}
                      key={item} 
                      onClick={()=>setSelectedSize(item)}
                    >{item}</div>
                  )
                }
              </div>
            </div>

            <div className="sprod-atcContainer">
              <p className="sprod-subheading">
                  QUANTITY
              </p>
              <div className='sprod-atcSubContainer'>
                <div className="sprod-quantityContainer">
                  <Remove className='sprod-remove' onClick={()=>(quantity>1) && setQuantity(prev=>prev-1)}/>
                  <div className="sprod-quantity">
                    {quantity}
                  </div>
                  <Add className='sprod-add' onClick={()=>(quantity<10) && setQuantity(prev=>prev+1)}/>
                </div>
                <button className="sprod-atcBtn" onClick={addProductToCart}>
                  <ShoppingBagOutlinedIcon fontSize='small' />
                  <p>ADD TO CART</p> 
                </button>
              </div>

              </div>

            <div className="sprod-descContainer">
              <p className="sprod-subheading fs-16px">
                Description
              </p>
              <p className="sprod-desc">
                {product.desc}
              </p>
            </div>
          </div>

        </div>


        <Newsletter />
        <Footer />
    </div>
  )
}

export default SingleProduct