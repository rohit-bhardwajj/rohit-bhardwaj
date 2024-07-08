import React from 'react'
import ProjectData from './ProjectData';
function Projects2() {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <h1 className='my-20 text-center text-4xl'>Projects</h1>
            <div>{ProjectData.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-full lg:w-1/4">
                        <img src={project.image} 
                        width={150} height={150}
                        alt={project.title}
                        className='mb-6 rounded' />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <h5 className='mb-2 font-semibold  dark:text-white'>{project.title}</h5>
                    <p className='mb-4 text-neutral-400'>{project.desc}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className='mr-2 rounded text-purple-900 text-small font-medium bg-neutral-900 px-2 py-1'>{tech}</span>
                    ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects2