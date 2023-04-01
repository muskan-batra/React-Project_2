import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import {Routes , Route } from 'react-router-dom'
import Footer from './Components/Pages/Footer';
import Menu from './Components/Pages/Menu';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
function App() {
  return (
    <div className="App">
      <Navbar / >

  
<Routes>

<Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
< Footer />
      </div>
  );
}

export default App;
