import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Cart from './Cart'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/shop' element = {<Shop/>}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
      <Footer />
    </Router>
   </>
  );
}

export default App;
