import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home";
import ProductPage from "../src/components/ProductPage/ProductPage";
import CartPage from "../src/pages//Cart/Cart.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<ProductPage />} />
        <Route path='cart' element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
