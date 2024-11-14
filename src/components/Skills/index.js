import React from 'react';
import MySkills from './skills';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <h3 className="section_subtitle">My Skills</h3>

      <div className="skills_container">
        <MySkills />
      </div>
    </section>
  )
}

export default Skills;