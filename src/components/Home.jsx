import React from "react";

import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'






export default function Home() {
  return (
    <div className="style flex content-center justify-center" >
    <Alert variant="success" className="w-64 h-96 m-4" >
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully find my home page. please feel free
        to explore my products , below  is the shop button
      </p>
      <Link to ='/Products'> 
           <Button variant="primary">go to Products</Button>{' '}
           </Link>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to add all items to cart to keep things
        nice and tidy.
      </p>
    </Alert>
    
    </div>
  );
}
