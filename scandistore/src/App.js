import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ExchangeRates from "./index.js";
import Home from "../src/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
       
      </Routes>
    </Router>
    
      
  
  );
}

export default App;
