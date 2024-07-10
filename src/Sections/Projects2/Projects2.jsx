import React from 'react';
import ProjectData from './ProjectData';

function Projects2() {
    return (
        <div id="projects" className='border-b border-neutral-900 pb-12'>
            <h1 className='my-20 text-center text-4xl font-bold text-white'>Projects</h1>
            <div className='flex flex-col justify-end items-center md:items-end gap-5 px-6'>
                {ProjectData.map((project, index) => (
                    <div key={index} className='flex flex-col items-center gap-x-10 lg:flex-row lg:items-center w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6'>
                        <div className="flex-shrink-0">
                            <a href={project.live}>
                                <img
                                    src={project.image}
                                    width={150}
                                    height={150}
                                    alt={project.title}
                                    className='rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105'
                                />
                            </a>
                        </div>
                        <div className="p-6 rounded-lg flex flex-col gap-2 shadow-md w-full">
                            <h3 className='mb-2 text-2xl font-bold text-white max-sm:text-center'>{project.title}</h3>
                            <div className="flex gap-6 max-sm:justify-center">
                                <a href={project.Github} target='_blank'>
                                    <button className='rounded-lg bg-[#fff] px-4 py-2 font-bold border-none transition-transform duration-200 transform hover:scale-105 '>
                                        Github
                                    </button>
                                </a>
                                <a href={project.live} target='_blank'>
                                    <button className='rounded-lg bg-[#fff] px-4 py-2 font-bold border-none transition-transform duration-200 transform hover:scale-105'>
                                        Live
                                    </button>
                                </a>
                            </div>
                            <p className='mb-4 text-white max-sm:text-center'>{project.desc}</p>
                            <div className='max-sm:text-center'>
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='mr-2 mb-2 rounded text-white text-small font-medium bg-purple-700/40 px-2 py-1 shadow-sm transition-transform duration-200 cursor-default transform hover:scale-110'>
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
