import React from 'react'
import '../index.css';


const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-6 md:p-12 bg-white z-50">
      {/* Left Container */}
      <div className="w-full md:w-1/3 p-6">
        <ul className="space-y-4">
          <li className="text-lg md:text-xl border-b border-gray-300 pb-2">
            <span className="text-[#404040] text-base tracking-wider">NAME:</span> <span className="text-[#a3a3a3] text-base font-serif">Dev Patel</span>
          </li>
          <li className="text-lg md:text-xl border-b border-gray-300 pb-2">
            <span className="text-[#404040] text-base tracking-wider">PRONOUNS:</span> <span className="text-[#a3a3a3] text-base font-serif">He/Him/His</span>
          </li>
          <li className="text-lg md:text-xl border-b border-gray-300 pb-2">
            <span className="text-[#404040] text-base tracking-wider">SCHOOL:</span> <span className="text-[#a3a3a3] text-base font-serif">UNC Chapel Hill</span>
          </li>
          <li className="text-lg md:text-xl border-b border-gray-300 pb-2">
            <span className="text-[#404040] text-base tracking-wider">AGE:</span> <span className="text-[#a3a3a3] text-base font-serif">20 Years</span>
          </li>
          <li className="text-lg md:text-xl pb-2">
            <span className="text-[#404040] text-base tracking-wider">HOMETOWN:</span> <span className="text-[#a3a3a3] text-base font-serif">Cary, NC</span>
          </li>
        </ul>

        <div className="mt-8 flex space-x-4 text-center sm: text-left">
          <a href="mailto:devptl04@gmail.com" className="text-gray-600 hover:text-gray-900 text-4xl"><span className="fas fa-envelope"></span></a>
          <a href="www.linkedin.com/in/dev-patel04" className="text-gray-600 hover:text-gray-900 text-4xl"><span className="fab fa-linkedin"></span></a>
          <a href="https://github.com/devptl04/" className="text-gray-600 hover:text-gray-900 text-4xl"><span className="fab fa-github"></span></a>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full md:w-2/3 p-6">
        <p className="text-[#a3a3a3] text-md md:text-xl tracking-wide font-ebGaramond">
            I am a student at UNC, class of 2026, pursuing a double major in Computer Science and Business Administration. I have been studying computer science since my junior year in high school, and I am comfortable coding in Java, Python, HTML, CSS, JavaScript, and TypeScript. When I'm not in classes, I'm often involved in software development and entrepreneurship. As the Founder and CEO of Goobr, I lead the development of a ride-sharing service using golf carts around UNC's campus.
            I have also strengthened my skills professionally through internships at, fintech company, DTCC and Cisco.
            <br /><br />
            I'm actively involved in a variety of extracurriculars on campus, including the Competitive Programming Club, Busi-Tech Club, Spikeball Club, and I am the president and co-founder of Iota Nu Delta at UNC. In the rare moments I'm free, I enjoy playing pickleball and basketball, playing guitar, and trying new things!
        </p>
		<div className="mt-8">
  			<a href='/images/resume.pdf' download="Dev Patel Resume">
			  <button className="bg-[#38bdf8] text-black hover:bg-opacity-0 border border-[#38bdf8] hover:border-sky-400 hover:text-[#38bdf8] py-4 px-6">
      				<span className='text-md tracking-wider font-ebGaramond'>DOWNLOAD RESUME</span>
    			</button>
  			</a>
		</div>
      </div>
    </div>
  );
};

export default About;
