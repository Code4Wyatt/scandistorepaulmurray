import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home";
import ProductPage from "../src/components/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
