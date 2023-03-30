import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DesignSystem from "./DesignSystem";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Navbar from "./Components/Navbar/Navbar";
import DesignSystemNav from "./Components/DesignSystemNav/DesignSystemNav";

const Header = () => {
  return useLocation().pathname === "/" ? <DesignSystemNav /> : <Navbar />;
};

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<DesignSystem />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
