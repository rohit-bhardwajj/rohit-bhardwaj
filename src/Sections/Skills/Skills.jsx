import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div class="skills">
      <div class="skill">
        <p class="skill-name">Git</p>
        <div class="skill-bar">
          <hr style={{ width: '70%' }} />
          <span class="percentage">70%</span>
        </div>
      </div>
      <div class="skill">
        <p class="skill-name">Java</p>
        <div class="skill-bar">
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
      <div class="skill">
        <p class="skill-name">ReactJs</p>
        <div class="skill-bar">
          <hr style={{ width: '50%' }} />
          <span class="percentage">50%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
