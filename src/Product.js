import { useState } from 'react';
import { Counter } from './Counter';
import { IconButton } from "@mui/material";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

export function Product({ product, id,deleteButton}) {
  const [show, setShow] = useState(true);
  const styles = {
    color: product.rating >= 4.5 ? "green" : "red"
  };
  const descstyle = {
    display: show ? "block" : "none"
  };
  const btnstyle={
    margin:"0 15px"
  }
  const navigate = useNavigate();
  return (
    <div className='product-container'>
      <img className='product-poster' src={product.poster} />
      <div className='product-spec'>
        <h2 className='product-name'>{product.name} - {id}</h2>
        <h5 className='product-rating' style={styles}>⭐{product.rating}</h5>
      </div>
      <button style={btnstyle} onClick={() => setShow(!show)}>ToggleButton</button>
      {/* <Button onClick={() => navigate('/products/'+ id)}><InfoIcon /></Button> */}
      <IconButton aria-label = "info"
      color ="primary"
      onClick={() => navigate('/products/'+ id)}
      ><InfoIcon /></IconButton>
      <p className='product-description' style={descstyle}>{product.description}</p>
      <div className='product-cat'>
        <p className='product-category'>{product.category}</p>
        <p className='product-price'>₹ {product.price}</p>
      </div>
      <Counter /> {deleteButton}
      
    </div>
  );
}
