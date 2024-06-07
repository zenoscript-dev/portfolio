import React from 'react';
import "./Experience.css"

const ExperienceCard = ({logo,company,role, timeLine}) => {
  return (
    <div className='experience-card-wrapper'>
      <div className="experience-card-left">
        <img src={logo} alt="" />
        <div className="experience-card-left-company-details">
            <div className="experience-card-left-company">{company}</div>
            <div className="experience-card-left-role">{role}</div>
        </div>
      </div>
      <div className="experience-card-right">
        <div className='experience-card-right-timeline'>
            {timeLine}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
