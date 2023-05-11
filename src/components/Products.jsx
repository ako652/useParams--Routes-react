import React, {useEffect, useState} from "react";

import ProductItem from '../pages/ProductItem'
import { Spinner } from "react-bootstrap";




export default function Products(){

   const url = 'https://fakestoreapi.com/products'
   const [products, setProducts] =useState([])
   const [loading , setLoading] =useState(true)


   function getData(){
     

    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        setLoading(false)
        setProducts(data)

    })
    .catch((error)=>error)
   }

   useEffect(()=>{
    getData()
   },[])


    return (
        <div className="grid grid-cols-4">
            {loading? <Spinner animation="border" variant="primary" /> :products.map((product)=>{
                return(
                    <div key={product.id} className="border-2">
                        <ProductItem item={product}/>
                    </div>
                    
                )
            })}
        </div>
    )
}