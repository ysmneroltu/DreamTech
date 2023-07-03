import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Catalog from './components/pages/Catalog';
import PCBuilder from './components/pages/PCBuilder';
import Contact from './components/pages/Contact';
import Cart from './components/pages/Cart';

import CPU from './components/pages/CPU';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/DreamTech" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/pcbuilder" element={<PCBuilder/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />

            <Route path="catalog/cpu" element={<CPU/>} />
          </Routes>   
          <Footer />
      </div>
    </Router>
  );
}

export default App;
