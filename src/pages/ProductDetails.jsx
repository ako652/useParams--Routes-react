import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ProductDetails(){
    const result = useParams();
   const url = `https://fakestoreapi.com/products/${result.id}`

   const [product, setproduct]=useState({})

   function getDetails(){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        setproduct(data)
    })
   }
   useEffect(()=>{
  getDetails()
   })



    return(
        <div className=' ms-8 border-2 bg-rose-400 w-96 h-64'>
          <Link to='/Products'> <div>
            <p>
            {product && product.title}
            </p>
            <p>{product && product.price}</p>

            </div>
            </Link> 
           
         </div>
    )
}