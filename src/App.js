import React from 'react';
import "./App.css";
import Header from "./components/Header/index"
import Home from "./components/Home/home"
import About from "./components/About/index"
import Skills from "./components/Skills/index"

const App = () => {
  return(
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App;