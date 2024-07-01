import React from 'react'
import ProjectCard from './ProjectCard';


function Projects() {
  return (
    <div className='bg-white'>
      <h1 className='text-center text-[#2b2b2b] text-4xl mx-10 mt-17 pt-10 sm:text-left'>PROJECTS</h1>
      <h2 className='text-center text-xl text-[#38bdf8] mx-10 sm:text-left '>Check out some of my creations.</h2>
      <div className='sm:mx-20 mx-2 px-10 py-5'>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  )
}

export default Projects
