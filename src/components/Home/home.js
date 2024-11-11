import React from 'react'
import "./home.css"
import Social from './social';
import Intro from './Intro';
import ScrollDown from './scroll-down';


const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social />

                <div className="home_img"></div>

                <Intro />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home