import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import About from './pages/About';
import Products from './pages/Products';
import LearnMore from './pages/LearnMore';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
