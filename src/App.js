import logo from './logo.svg';
import './App.css';
// import { Addcolor } from './Addcolor';
// import { Pricecard } from './Pricecard';
// import {userlist} from './Pricecard';
import { Routes,Route,Link, Navigate,useNavigate } from 'react-router-dom';
import { ProductList } from './ProductList';
import { Addcolor } from './Addcolor';
import { PricecardList } from './PricecardList';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { ProductDetailPage } from './ProductDetailPage';
import { useState } from 'react';
import { AddProduct } from './AddProduct';
import { AppBar } from '@mui/material';
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { BasicForms } from './BasicForms';

export const INITIAL_PRODUCTS =[
  {
    poster:"https://m.media-amazon.com/images/I/71yzJoE7WlL._SX522_.jpg",
    name:"Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
    rating:4.5,
    description:"48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos",
    price:"1,43,990",
    category:"Electronics",
    trailer:"https://www.youtube.com/embed/WXHeyz7_9fc"
  },
  {
    poster:"https://m.media-amazon.com/images/I/51uVckL1jRL._SY300_SX300_QL70_FMwebp_.jpg",
    name:"Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)",
    rating:4.8,
    description:"Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hertz | 178 Degree wide viewing angle Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console",
    price:"75,990",
    category:"Electronics",
    trailer:"https://www.youtube.com/embed/TqK341a5qVM"
  },
  {
    poster:"https://m.media-amazon.com/images/I/61MPGbBpC3L._UY679_.jpg",
    name:"Veirdo® Oversized Baggy Fit Comfortable Pure Cotton Round Neck T-Shirt",
    rating:4.0,
    description:"Made from pure cotton for maximum comfort and breathability.Trendy and fashionable oversized fit for a unique and stylish look.",
    price:"600",
    category:"T-shirts and Polos",
    trailer:"https://www.youtube.com/embed/_rCIzoNB_xE"
  }
];

export default function App() {
  const [productList,setProductList] = useState(INITIAL_PRODUCTS);
  const navigate = useNavigate();

  
  return (
    <div className='App'>
      <AppBar position='static'>
      <Toolbar>
        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/products")}>
          ProductList
        </Button>
        <Button color="inherit" onClick={() => navigate("/products/add")}>
          Add Product
        </Button>
        <Button color="inherit" onClick={() => navigate("/insertcolor")}>
          AddColor
        </Button>
        <Button color="inherit" onClick={() => navigate("/cardList")}>
        PricecardList
        </Button>
        <Button color="inherit" onClick={() => navigate("/forms")}>
        Basic Forms
        </Button>
        <Button color="inherit" onClick={() => navigate("*")}>
          NotAnymore
        </Button>
        </Toolbar>
      </AppBar>
      {/* <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/products">ProductList</Link>
          </li>
          <li>
            <Link to = "/products/add">AddProduct</Link>
          </li>
          <li>
            <Link to = "/insertcolor">Addcolor</Link>
          </li>
          <li>
            <Link to = "/cardList">PricecardList</Link>
          </li>
          <li>
            <Link to = "*">NotAnyMore</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
        <ProductList productList={productList}
        setProductList={setProductList}
        />} /> 
        <Route path="/insertcolor" element={<Addcolor/>} />
        <Route path="/cardList" element={<PricecardList/>} />
        <Route path="/products/:id" element={<ProductDetailPage productList={productList} 
         setProductList={setProductList}
         />} />
        
        <Route path="/404" element={<PageNotFound/>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/items" element={
        <ProductList productList={productList}
        setProductList={setProductList}
        />} /> 
        <Route path="/products/add" element={<AddProduct productList={productList}
        setProductList={setProductList}
        />} />
        <Route path="/forms" element={<BasicForms/>} />
      </Routes>
    
    </div>
  );
}


