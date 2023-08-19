import Home from "./screens/Home";
import "./App.css"
import ProductList from "./screens/ProductList";
import SingleProduct from "./screens/SingleProduct";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Cart from "./screens/Cart";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Checkout from "./screens/Checkout";
import OrderSuccess from "./screens/OrderSuccess";


const App=()=> {

  const user = useSelector(state=>state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/address" element={<Checkout />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/login" element={
          user ? <Navigate to="/" replace={true}/> : <Login />
        } />
        <Route path="/register" element={
          user ? <Navigate to="/" replace={true}/> : <Register />
        } />
      </Routes>
    </Router>
  );
}

export default App;
