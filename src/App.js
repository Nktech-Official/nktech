import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css'
import Navbar from './Components/main/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/main/Footer';
import Home from './Pages/Home';
import Service from './Pages/Service';
function App() {
  return (
    
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
  </Router>
  
  );
}

export default App;
