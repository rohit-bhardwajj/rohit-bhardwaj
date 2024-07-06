import React from 'react';

function ProjectCard({src,title,github,live,desc}) {
  return (       

    <a target='_blank' href={live}>
    <img src={src} alt={`${title} image`}  className='hover'/>
    <h3>{title}</h3>
    <p style={{ color: "var(--text-color)" }}>{desc}</p>

    {/* <a href={github} target='_blank'><button>Git</button></a> */}
   </a>

  )
}

export default ProjectCard;