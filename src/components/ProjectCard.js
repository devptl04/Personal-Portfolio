import React from 'react';
import projectElements from "../assets/projectElements";

export default function ProjectCard() {
    return (
        <div className="container mx-auto px-2 sm:px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {projectElements.slice(0, 3).map((element) => (
                    <div key={element.id} className=" group bg-[#2b2b2b]  hover:bg-white pt-5 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
                        <a href={element.a} target="_blank" rel="noopener noreferrer">
                            <div className="service-thumb pt-8">
                                <i className={`${element.icon} text-5xl text-white group-hover:text-[#38bdf8]`}></i>
                                <h1 className="text-white font-serif text-xl font-bold mt-4 group-hover:text-[#292524]">{element.title}</h1>
                                <p className="text-[#696969] font-serif text-sm font-medium mt-2 mb-4">{element.description}</p>
                                <div className="flex flex-wrap mt-4">
                                    {element.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="mr-2 mb-2 px-3 py-1 border-2 border rounded-full  border bg-[#38bdf8] text-xs text-white group-hover:bg-white group-hover:border-[#38bdf8] group-hover:text-[#38bdf8]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {projectElements.slice(3).map((element) => (
                    <div key={element.id} className= " group bg-[#2b2b2b] hover:bg-white mt-5 pt-10 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
                        <a href={element.a} target="_blank" rel="noopener noreferrer">
                            <div className="service-thumb">
                                <i className={`${element.icon} text-5xl text-white group-hover:text-[#38bdf8]`}></i>
                                <h1 className="text-white text-xl font-serif font-bold mt-4 group-hover:text-[#292524]">{element.title}</h1>
                                <p className="text-[#696969] font-medium font-serif text-sm mt-2 mb-4">{element.description}</p>
                                <div className="flex flex-wrap mt-8">
                                    {element.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="mr-2 mb-2 px-3 py-1 border-2 border rounded-full  border bg-[#38bdf8] text-xs text-white group-hover:bg-white group-hover:border-[#38bdf8] group-hover:text-[#38bdf8]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
