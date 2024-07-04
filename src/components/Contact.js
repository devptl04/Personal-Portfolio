import React from 'react';

function Contact() {
  return (
    <div className='bg-[#242422] text-white p-8 mt-10'>
      <div className='text-center mb-12 pt-10 font-serif'>
        <p className='text-sky-400 text-lg font-serif'>Contact</p>
        <h1 className='text-4xl font-bold font-serif'>I'd Love To Connect With You.</h1>
        <span className='text-gray-400 font-serif mt-3'>Let me get to know more about you.</span>
      </div>
      <div className='flex flex-col lg:flex-row justify-around items-center mb-16 space-y-10 lg:space-y-0'>
        <div className='text-center'>
          <a href="https://github.com/devptl04" target="_blank" rel="noopener noreferrer" className='text-3xl mb-4'>
            <span className='fab fa-github text-4xl mb-4 cursor-pointer hover:text-sky-400'></span>
          </a>
          <p className='text-lg text-sky-400 font-serif'>Look at more</p>
          <span className='text-gray-400 font-serif mt-2'>GitHub Profile</span>
        </div>
        <div className='text-center'>
          <a href="mailto:devptl04@gmail.com" className='text-3xl mb-4'>
            <span className='fas fa-envelope text-4xl mb-4 cursor-pointer hover:text-sky-400'></span>
          </a>
          <p className='text-lg text-sky-400 font-serif'>Email Me At</p>
          <span className='text-gray-400 font-serif mt-2'>devptl04@gmail.com</span>
        </div>
        <div className='text-center'>
          <a href="https://www.linkedin.com/in/dev-patel04/" target="_blank" rel="noopener noreferrer" className='text-3xl mb-4'>
            <span className='fab fa-linkedin text-4xl mb-4 cursor-pointer hover:text-sky-400'></span>
          </a>
          <p className='text-lg text-sky-400 font-serif'>Let's Connect</p>
          <span className='text-gray-400 font-serif mt-2'>LinkedIn Profile</span>
        </div>
      </div>
      <div className='text-center border-t border-gray-700 pt-8'>
        <p className='text-gray-400'>Copyright © 2024 Dev Patel</p>
      </div>
    </div>
  )
}

export default Contact;

