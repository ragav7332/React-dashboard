import { useNavigate, useParams } from 'react-router-dom';
import { Counter } from './Counter';
import { Button } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useState,useEffect } from 'react';


export function ProductDetailPage() {
  const [product,setProduct] = useState({});
  const { id } = useParams();
  // const product = productList[id];
  const navigate = useNavigate();
  const styles={margin:"0px 10px"} 
  const getProducts = ()=>{
    fetch("https://64ed6e1cf9b2b70f2bfb805a.mockapi.io/products/"+id,{
      method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>setProduct(data));
  }
  useEffect(()=> getProducts(),[]);

  const styles1 ={
    width:"80%",
    lineSpacing:"10px",
  }
  return (
    <div style={styles1}>
      <h3>ProductDetailPage - {id}</h3>
      <div className='product-container'>
      <iframe width="967" height="544" src={product.trailer} 
      
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen></iframe>
      
      <div className='product-spec'>
        <h2 className='product-name'>{product.name}</h2>
        <h5 className='product-rating'>⭐{product.rating}</h5>
      </div>
      <p className='product-description'>{product.description}</p>
      <div className='product-cat'>
        <p className='product-category'>{product.category}</p>
        <p className='product-price'>₹ {product.price}</p>
      </div>
      <Counter /><br></br>
      <Button style={styles} variant="contained" onClick={()=>navigate(-1)}><SkipPreviousIcon></SkipPreviousIcon>Previous</Button>
    </div>
    
    </div>
  );
}
