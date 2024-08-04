// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ConfirmOrder from './pages/ConfirmOrder';
import ContactUs from './pages/ContactUs';
import PlaceOrder from './pages/PlaceOrder';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (

     <Routes>
     <Route path='/' element={<ProductsList/>}/>
     <Route path='/products/:id' element={<Product/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/confirmOrder' element={<ConfirmOrder/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
     </Routes>
   
  );
}

export default App;
