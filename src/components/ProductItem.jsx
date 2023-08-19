import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const ProductItem = ({item}) => {
  return (
    <div className='productItem'>
        <div className="productItem-circle">

        </div>

        <img src={item.img} alt="" className="prodItem-img" />
        
        <div className="prodItem-icons">
            <div className="prodItem-icon">
                <ShoppingCartOutlinedIcon />
            </div>
            <div className="prodItem-icon">
                <Link to={`/product/${item._id}`} className="link" >
                    <SearchOutlinedIcon />

                </Link>
            </div>
            <div className="prodItem-icon">
                <FavoriteBorderOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default ProductItem