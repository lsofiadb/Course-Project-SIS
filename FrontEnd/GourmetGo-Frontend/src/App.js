import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products';
import Restaurants from './Pages/Restaurants/Restaurants';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import LoginHome from './Pages/Login/Login'
import AdminRest from './Pages/AdminRest/AdminRest';
import AdminProd from './Pages/AdminProd/AdminProd';
import InsertRest from './Pages/InsertRest/InsertRest';
import InsertProd from './Pages/InsertProd/InsertProd';



function App() {

  const [Cart, setCart] = useState([]);

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Products/:id' element={<Products setCart={setCart} Cart={Cart}/>}/>
            <Route path='/Restaurants' element={<Restaurants/>}/>
            <Route path='/ShoppingCart' element={<ShoppingCart Cart={Cart}/>}/>
            <Route path='/Login' element={<LoginHome/>}/>
            <Route path='/AdminRest' element={<AdminRest/>}/>
            <Route path='/AdminProd/:id' element={<AdminProd/>}/>
            <Route path='/InsertRest' element={<InsertRest/>}/>
            <Route path='/InsertProd' element={<InsertProd/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;