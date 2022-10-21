
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Global/Navbar/Navbar';
import Banner from './Components/Home/Banner/Banner';
import Service from './Components/Home/Service/Service';

import 'swiper/css';
import Footer from './Components/Global/Footer/Footer';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
    </Routes>
    <Footer></Footer>
    
    </BrowserRouter>
   
  );
}

export default App;
