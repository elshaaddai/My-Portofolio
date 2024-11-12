import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className="about-section" id="about">
        <h2 className="section_title">About Me</h2>
        <h2 className="section_subtitle">Let me introduce my self</h2>

        <div className="about_container">
            <img className="about_img" />
            <div className="about_data">
                <p>
                    My name is Elshaddai Grace Tambuwun. Usually called Elsha. I am a student at Klabat University, Airmadidi, currently pursuing my studies in computer science. I have always been passionate about technology, and this passion has driven me to pursue a career in programming. I am particularly enthusiastic about front-end development because I enjoy creating user-friendly, visually appealing websites and applications. I am constantly learning and growing in this field, as I believe it is essential to stay updated with the latest trends and technologies in web development.
                </p>
                <p>
                    I have several skills such as time management, communication, and problem-solving. I believe these skills are crucial for success in the tech industry, as they help me stay organized, work efficiently, and collaborate effectively with others. In addition to my technical skills, I also prioritize soft skills, such as adaptability and teamwork, as I believe they are just as important when working on complex projects.
                </p>
            </div>  
        </div>

        <div className='about_profile'>
            <h2 className='Profile'>Profile</h2>
            <div className='about_fullName'>
                Full Name:
                <p>Elshaddai Grace Tambuwun</p>
            </div>  
            <div className='about_birthday'>
                Birth Date:
                <p>20 July 2004</p>
            </div>
            <div className='about_email'>
                Email:
                <p>elshatambuwun20@gmail.com</p>
                <p>s22210278@student.unklab.ac.id</p>
            </div>
        </div>
    </section>
  )
}

export default About;