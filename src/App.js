import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import {Routes , Route } from 'react-router-dom'
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar / >

  
<Routes>

<Route path="/" element={<Home />} />

</Routes>
< Footer />
      </div>
  );
}

export default App;
