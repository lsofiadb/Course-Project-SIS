import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products';
import Restaurants from './Pages/Restaurants/Restaurants';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';

function App() {

  const [Cart, setCart] = useState([]);

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Products/:id' element={<Products setCart={setCart} Cart={Cart}/>}/>
            <Route path='/Restaurants' element={<Restaurants/>}/>
            <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;