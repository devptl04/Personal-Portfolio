import React from 'react';
import '../index.css';
import { Button } from './Button';
import '../App.css';
import ImageCarousel from './ImageCarousel';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';

function Main() {
  return (
    <div className='relative flex flex-col flex-1 h-screen overflow-hidden bg-[#242422]'>
      <section className='relative grid grid-cols-1 lg:grid-cols-2 h-full'>
        <div className='sm:bg-[#082f49] flex flex-col lg:justify-center text-center sm:text-center gap-6 md:gap-8 lg:gap-10 p-6 lg:p-10 sm:-mt-20 '>
          <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl text-sky-400 text-center'> 
                <TypeAnimation
                    sequence={[
                        'Hi 👋!',
                        1000, 
                        'I am Dev Patel 🙋‍♂️',
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={60}
                    style={{ display: 'inline-block'}}
                    repeat={0}
                />                    
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-[#d4d4d8]'>
            I'm a <span className='text-white'>Software Developer</span>, <span className='text-white'>Entrepreneur</span>, and <span className='text-white'>Student</span> at the <span className='text-sky-400'>University of North Carolina Chapel Hill 🐏 </span> studying Computer Science and Business Adminstration.
          </p>
          <ScrollLink to="about" smooth={true} duration={1000}>
            <Button buttonStyle='btn--primary' buttonSize='btn--large'>
              DISCOVER MORE
            </Button>
          </ScrollLink>
        </div>
        <div className='relative bg-[#242422] h-full flex items-center justify-center'>
          <ImageCarousel />
        </div>
      </section>
    </div>
  );
}

export default Main;
