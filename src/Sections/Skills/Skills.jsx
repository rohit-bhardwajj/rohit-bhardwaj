import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <p className="skill-name">Git</p>
        <div className="skill-bar">
          <hr style={{ width: '70%' }} />
          <span className="percentage">70%</span>
        </div>
      </div>
      <div className="skill">
        <p className="skill-name">Java</p>
        <div className="skill-bar">
          <hr style={{ width: '60%' }} />
          <span className="percentage">60%</span>
        </div>
      </div>
      <div className="skill">
        <p className="skill-name">JavaScript</p>
        <div className="skill-bar">
          <hr style={{ width: '60%' }} />
          <span className="percentage">60%</span>
        </div>
      </div>
      <div className="skill">
        <p className="skill-name">ReactJs</p>
        <div className="skill-bar">
          <hr style={{ width: '50%' }} />
          <span className="percentage">50%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
