import React from 'react';
import ProjectData from './ProjectData';

function Projects2() {
    return (
        <div className='border-b border-neutral-900 pb-12'>
            <h1 className='my-20 text-center text-4xl font-bold text-white'>Projects</h1>
            <div className='flex flex-col space-y-12 items-center px-6'>
                {ProjectData.map((project, index) => (
                    <div key={index} className='flex flex-col items-center lg:flex-row lg:items-center w-full max-w-4xl space-y-6 lg:space-y-0 lg:space-x-6'>
                        <div className="flex-shrink-0">
                            <img 
                                src={project.image} 
                                width={150} 
                                height={150}
                                alt={project.title}
                                className='rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105'
                            />
                        </div>
                        <div className="bg-white/10 bg-opacity-10 backdrop-blur-md border border-white border-solid border-opacity-20 p-6 rounded-lg shadow-md w-full">
                            <h3 className='mb-2 text-2xl font-bold text-white'>{project.title}</h3>
                            <p className='mb-4 text-neutral-400'>{project.desc}</p>
                            <div className='flex flex-wrap'>
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className='mr-2 mb-2 rounded text-white text-small font-medium bg-purple-700 px-2 py-1 shadow-sm transition-transform duration-200 transform hover:scale-105'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects2;
