import React from 'react';
import "./App.css";
import Header from "./components/Header/index"
import Home from "./components/Home/home"
import About from "./components/About/index"
import Skills from "./components/Skills/index"
import Project from "./components/Project/index"

const App = () => {
  return(
    <div>
      <Header />
        <Home />
        <About />
        <Skills />
        <Project />

    </div>
  )
}

export default App;