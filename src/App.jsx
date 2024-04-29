import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./API/index.js"
import { deleteOne, getAll } from './API/index.js';
import AddForm from './components/AddForm.jsx';
import Login from './components/Login.jsx';

import Product from './components/Product.jsx';
import Welcome from './components/Welcome.jsx';
import Logout from './components/Logout.jsx';
import Search from './components/Search.jsx';

function App() {

  const [isLogged, setisLogged] = useState(false)
  const [product, setproduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  let nimProduct =  product.filter((x)=>x.name.toLowerCase().trim().includes(searchProduct.toLowerCase().trim()))

  const getProducts = () => {
    getAll().then((res) => {
      setproduct(res.data)
    });
  };


  return (
    <>
      {isLogged ?
        <div className='welcome'>
          <Welcome />
          <Logout isLogged={isLogged} setisLogged={setisLogged} />
        </div> :
        <Login isLogged={isLogged} setisLogged={setisLogged} />}
      <AddForm product={product} setproduct={setproduct} getProducts={getProducts} />
      <Search  setSearchProduct={setSearchProduct}   />
      {isLogged ? <Product product={nimProduct} setproduct={setproduct} getProducts={getProducts} /> : <h1 className='Lem'>you should login to see products</h1>}

    </>
  )
}

export default App
