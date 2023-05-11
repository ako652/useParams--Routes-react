import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Products from './components/Products'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div className="App m-4">


   <Navbar  />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element ={<Products />}     />

      <Route  path="/products/:id" element={<ProductDetails />}/>

     


    </Routes>
  </div>;
}

export default App;
