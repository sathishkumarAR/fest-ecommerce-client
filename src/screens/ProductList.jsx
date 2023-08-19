import { useLocation, useParams } from 'react-router-dom'

import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { useState } from 'react'

const ProductList = () => {

    const {category} = useParams();

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("price-desc");

    const handleFilters=(e)=>{

        setFilters({
            ...filters,
            [e.target.name]:e.target.value
        })
    }

    const resetFilters = ()=>{
        setFilters({});

        document.getElementById("color").value="";
        document.getElementById("size").value="";
    }

  return (
    <div className='productList-container'>

        <Navbar />
        <Announcement />

        <h1 className='productList-title'>{category.toUpperCase()}</h1>
        <div className="filterContainer">
            <div className="filter">
                <span className="filterText">
                    Filter Products
                </span> 
                <select defaultValue="" name="color" id="color" onChange={handleFilters}>
                    <option value="" disabled>Color</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
                <select defaultValue="" name="size" id="size" onChange={handleFilters}>
                    <option value="" disabled>Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>

                <span className="filterClearBtn" onClick={resetFilters}>
                    CLEAR ALL
                </span>

            </div>
            <div className="filter">
                <span className="filterText">
                    Sort By
                </span>  
                <select defaultValue="newest" name="sort" id="sort" onChange={(e)=>setSort(e.target.value)}>
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price - Low to High</option>
                    <option value="price-desc">Price - High to Low</option>
                </select>
            </div>
        </div>

        <Products 
            category={category}
            filters={filters}
            sort={sort}
        />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList