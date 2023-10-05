import { Product } from './Product';
import { INITIAL_PRODUCTS } from './App';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export function ProductList() {
  const [productList,setProductList] = useState([]);
  const getProducts =() =>{
    fetch("https://nodeserver-productapp.onrender.com/products",{
      method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>setProductList(data));
    }
    useEffect(()=>getProducts(), [])

  return (
    <div>
   
    <div className='product-list'>
      {productList.map((pd, index) => (
        <Product product={pd}
          key={pd.id} id={pd.id} 
         deleteButton ={
           <IconButton 
           aria-label='delete'
           color='error'
           onClick={()=>{
            fetch("https://nodeserver-productapp.onrender.com/products/"+ pd.id,{
              method:"DELETE"
            })
            // .then((res)=>res.json())
            .then(()=>getProducts())
           }}>
          <DeleteIcon />
         </IconButton> }
          />
      ))}
    
    </div>
    
    </div>
  );
}
