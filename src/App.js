import React from 'react';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path ="Home" element={<Home/>}/>
      <Route path ="/services" element={<Services/>}/>
      <Route path ="/Products" element={<Products/>}/>
      <Route path ="/Sign-up" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
