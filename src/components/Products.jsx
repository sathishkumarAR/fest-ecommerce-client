import React, { useEffect } from 'react'
import axios from "axios"

import ProductItem from './ProductItem'
import { useState } from 'react'
import { logout } from '../redux/userSlice'
import {useDispatch} from "react-redux"

const Products = ({category,filters,sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch= useDispatch();


  useEffect(()=>{
    const getProducts=async()=>{

      try {
        const res = await axios.get(
          category ? 
          `/api/products?category=${category}`
          :
          `/api/products/`
        )

        setProducts(res.data)

      } catch (error) {
        if(error.response.status===401){
          dispatch(logout());
        }
      }
    }

    getProducts();
    
  },[category])

  useEffect(()=>{
    category && 
    setFilteredProducts(
      products.filter(item=>
        Object.entries(filters).every(([key,value])=> item[key].includes(value))  
      )
    )
    

  },[products,category,filters])


  useEffect(()=>{
    
    if(sort === "newest"){
      setFilteredProducts(prev=>{
        return [...prev].sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
      }
      )
    }
    else if(sort === 'price-asc'){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
      )
    }
    else if(sort === 'price-desc'){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
      )
    }

    
  },[sort])
  
  return (
    <div className='products'>
        {
          category ?
            filteredProducts.map(item=>(
                <ProductItem 
                    item={item}
                    key={item.id}
                    
                />
            ))
            :
            products
            .slice(0,8)
            .map(item=>(
                <ProductItem 
                    item={item}
                    key={item.id}
                    
                />
            ))
        }
    </div>
  )
}

export default Products