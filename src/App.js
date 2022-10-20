
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Global/Navbar/Navbar';
import Banner from './Components/Home/Banner/Banner';
import Service from './Components/Home/Service/Service';
import Pricing from './Components/Home/Pricing/Pricing';
import 'swiper/css';
import Footer from './Components/Global/Footer/Footer';



function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
}

export default App;
