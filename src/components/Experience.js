import React from 'react';
import Timeline from "./Timeline"; 
import SchoolTimeline from "./SchoolTimeline"; 

function Experience() {
  return (
    <div className='bg-[#242422] mb-5 pd-20'>
      <div className='Headings border-b border-white'>
        <h1 className='text-6xl font-bold text-center pt-20 text-[#38bdf8]'>Resume</h1>
        <h2 className='text-2xl text-center my-3 text-white'>Some Of My Experience!</h2>
        <p className='text-xl text-center text-[#a3a3a3] font-serif pb-10'>Here are my work experiences and education.</p>
      </div>
      <h3 className='mx-20 text-4xl mt-20 mb-10 text-center text-[#38bdf8] sm:text-left'>My Work Experience</h3>
      <div className='flex flex-col text-white sm:mx-20 text-base pb-6 sm:text-lg'>
        <Timeline></Timeline>
      </div>
      <h4 className='mx-20 text-4xl mt-20 mb-10 text-center text-[#38bdf8] sm:text-left'>My Education</h4>
      <div className='flex flex-col text-white sm:mx-20 text-base pb-6 sm:text-lg'>
        <SchoolTimeline></SchoolTimeline>
      </div>
      <div className="h-20 sm:p-15"></div>
    </div>
  );
}

export default Experience;
