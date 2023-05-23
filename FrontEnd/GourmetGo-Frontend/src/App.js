import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products';
import Restaurants from './Pages/Restaurants/Restaurants';

function App() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Restaurants' element={<Restaurants/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;