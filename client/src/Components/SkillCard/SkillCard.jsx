import React from 'react';
import "./SkillCard.css";

const SkillCard = ({Icon, name}) => {
  return (
    <div className='skill-card-wrapper'>
      <Icon size={36}/>
      <span className="skill-card-name">{name}</span>
    </div>
  )
}

export default SkillCard;
