import { useState } from 'react';
import { INITIAL_PRODUCTS } from './App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { Product } from './Product';


export function AddProduct() {
 
  const [name,setName] = useState("");
  const [poster,setPoster] = useState("");
  const [rating,setRating] = useState("");
  const [description,setDescription] = useState("");
  const [category,setCategory] = useState("");
  const [price,setPrice] = useState("");
  const navigate = useNavigate();
  
  return (
    <div>
       <div className='product-App'>
    <TextField className="outlined-basic" label="Enter the Name" variant="outlined"
     onChange={(event)=>setName(event.target.value)}
     value={name}
    />
    <TextField className="outlined-basic" label="Enter the Img Link" variant="outlined"
     onChange={(event)=>setPoster(event.target.value)}
     value={poster}
    />
    
    <TextField className="outlined-basic" label="Enter the Rating" variant="outlined"
     onChange={(event)=>setRating(event.target.value)}
     value={rating}
    />
   
    <TextField className="outlined-basic" label="Enter the Description" variant="outlined"
     onChange={(event)=>setDescription(event.target.value)}
     value={description}
    />
    
    <TextField className="outlined-basic" label="Enter the Category" variant="outlined"
     onChange={(event)=>setCategory(event.target.value)}
     value={category}
    />
    
    <TextField className="outlined-basic" label="Enter the Price" variant="outlined"
     onChange={(event)=>setPrice(event.target.value)}
     value={price}
    />
    <Button variant="contained"
    onClick={()=>{
      const newproduct={
         name,
         poster,
         rating,
         description,
         category,
         price,
      }
      fetch("https://64ed6e1cf9b2b70f2bfb805a.mockapi.io/products",{
        method:"POST",
        body: JSON.stringify(newproduct),
        headers:{
          "Content-Type" : "application/json"
        },
      })
        .then((res) => res.json())
        .then(() => navigate('/products'));
      // setProductList([...productList,newproduct]);
      // navigate('/products');
    }}
     >Add Product</Button>
    </div>
      
    
    </div>
  );
}
