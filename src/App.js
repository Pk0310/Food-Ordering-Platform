import React from 'react';
import "../src/Component/Basics/style.css";
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Menu from './Component/Menu';
import Product from './Component/Product';
import Contact from './Component/Contact';

const App = () => {
  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Menu/>
    <Product/>
    <Contact/>
    </>
  );
}

export default App;
