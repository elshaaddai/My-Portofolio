import React from 'react'
import "./home.css"
import Social from './social';
import Intro from './Intro';




const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
            <Social />
            <Intro />

                <div className="home_img"></div>
            </div>
        </div>
    </section>
  )
}

export default Home