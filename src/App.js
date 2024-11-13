import "./App.css";
import Header from "./components/Header/index"
import Home from "./components/Home/home"
import About from "./components/About/index"
import Skills from "./components/Skills/index"
import Project from "./components/Project/index"
import Contact from "./components/Contact/index"
import Loading from "./components/Loading/index"
import React, { useState, useEffect } from 'react';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);
  return(
    <div>
      <div className="App">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Header />
                    <Home />
                    <About />
                    <Skills />
                    <Project />
                    <Contact />

                </>
            )}
        </div>


    </div>
  )
}

export default App;