import React from 'react';

const Frontend = () => {
  const skills = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 50 },
    { name: 'MySQL', percentage: 70 },
    { name: 'Git', percentage: 65 },
    { name: 'React', percentage: 45 },
    { name: 'Figma', percentage: 70 },
    { name: 'Canva', percentage: 90 },
    { name: 'Rapid Miner', percentage: 60 },
    { name: 'Enterprise Architec', percentage: 70},
    { name: 'Virtual Box', percentage: 70},
    { name: 'Linux' , percentage: 75}
  ];

  return (
    <div className="skills_content">

      <div className="skills_box">
        {skills.map((skill, index) => (
          <div className="skills_data" key={index}>
            <div className="skill_info">
              <h3 className="skills_name">{skill.name}</h3>
              <span className="skills_level">{skill.percentage}%</span>
            </div>
            <div className="progress_bar">
              <div
                className="progress_fill"
                style={{ width: `${skill.percentage}%` }}
              >
                <span className="progress_label">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
