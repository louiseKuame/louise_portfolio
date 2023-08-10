// import logo from './logo.svg';
import './App.css';
import './Style.css';
import * as React from "react";
// import Test from './pages/Test';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Testimony from './pages/Testimony';
import Projet1 from './pages/Projet1';
import Projet2 from './pages/Projet2';
import { Routes, Route } from "react-router-dom";

function App() {
    return ( 
        <Routes>
          <Route path = "/" element = { <Home/> }/> 
          <Route path = "/contact" element = { <Contact/> } /> 
          <Route path = "/testimonies" element = { <Testimony/> }/> 
          <Route path = "/projet1" element = { <Projet1/> }/> 
          <Route path = "/projet2" element = { <Projet2/> }/> 
        </Routes> 
    );
}

export default App;