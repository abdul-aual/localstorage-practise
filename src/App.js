import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
