import "./index.css";
import Header from "./components/Header/index";
import Home from "./components/Home/home";
import About from "./components/About/index";
import Skills from "./components/Skills/index";
import Project from "./components/Project/index";
import Contact from "./components/Contact/index";
import React, { useState, useEffect } from 'react';


const App = () => {
  return(
    <div className="App">
        <Header />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
    </div>
  )
}

export default App;