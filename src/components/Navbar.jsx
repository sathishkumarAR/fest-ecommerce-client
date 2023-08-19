import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const Navbar=()=>{

    const cartQuantity = useSelector(state=>state.cart.cartQuantity)


    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className="lang">
                        EN
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Search" />
                        <SearchIcon className="nav-searchIcon"/>
                    </div>
                </div>
                <div className="nav-center">
                    <Link to="/" className="link">
                        <h1 className="logo">
                            FEST.
                        </h1>

                    </Link>
                </div>
                <div className="nav-right">

                    <Link to="/register" className="link">
                        <div className="nav-menuItem">
                            REGISTER
                        </div>
                    </Link>

                    <Link to="/login" className="link">
                        <div className="nav-menuItem">
                            SIGN IN
                        </div>
                    </Link>

                    <div className="nav-menuItem">
                        <Link to="/cart" className="link">
                            <Badge badgeContent={cartQuantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar