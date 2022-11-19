import React from 'react';
import About from '../About';
import Skills from '../Skills';
import Project from '../Project';

export default function Body() {
    return (
        <>
           <About />
           <Skills />
           <Project /> 

           <footer className="bg-gray-900 flex justify-center p-3 mt-12">
                <a href="https://github.com/Leveditor" target="_blank" rel="noreferrer">
                    <i className="hover:text-blue-500 devicon-github-original text-iconsFooter pr-3 text-emerald-50"></i>
                </a>
                <a href="https://www.linkedin.com/in/leandro-barbosa-589b08150/" target="_blank" rel="noreferrer" >
                    <i className="hover:text-blue-500 devicon-linkedin-plain text-iconsFooter text-emerald-50"></i>
                </a>
            </footer>
        </>
    )
}