  

  import React from "react";
  import { Button } from "react-bootstrap";
  import { Link } from "react-router-dom";

  export default function ProductItem({item}){


    return (
        <div >
            <div>{item.title}</div>
            <div>{item.price}
            <img src={item.image} alt="sun" className="w-32 ml-24" /> 
            
            </div>
            
           <Link to ={`/products/${item.id}`} > 
           <Button variant="primary">details page</Button>{' '}
           </Link>
        </div>
    )
  }