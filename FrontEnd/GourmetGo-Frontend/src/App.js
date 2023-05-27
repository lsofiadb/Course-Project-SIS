import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products';
import Restaurants from './Pages/Restaurants/Restaurants';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';

function App() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Products/:id' element={<Products/>}/>
            <Route path='/Restaurants' element={<Restaurants/>}/>
            <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;