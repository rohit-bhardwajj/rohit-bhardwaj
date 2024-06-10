import React from 'react';

function ProjectCard({src,title,github,desc}) {
  return (
    <a target='_blank' href={github}>
            <img src={src} alt={`${title} image`}  className='hover'/>
            <h3>{title}</h3>
            <p>{desc}</p>
            {/* <a href={github} target='_blank'><button>Git</button></a> */}
           </a>
  )
}

export default ProjectCard;