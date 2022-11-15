import React from 'react';
import { i18n } from '../../translate/i18n';

const technologies = [
    { name: 'Front-end', icon: 'devicon-html5-plain colored text-icons', iconCss : 'devicon-css3-plain colored text-icons pl-5', iconJs : 'devicon-javascript-plain colored text-icons pl-5'},
    { name: 'Back-end', icon: 'devicon-php-plain colored text-icons' },
    { name: i18n.t('skills.git'), icon: 'devicon-git-plain colored text-icons', githubIcon: 'devicon-github-original colored text-icons pl-5'},
    { name: 'Framework Front-end', icon: 'devicon-react-original colored text-icons' },
    { name: 'Framework Back-end', icon: 'devicon-laravel-plain colored text-icons' },
    { name: i18n.t('skills.system'), icon: 'devicon-windows8-original colored text-icons', iconLinux: 'devicon-linux-plain colored text-icons pl-5'},
    { name: 'Framework CSS', icon: 'devicon-bootstrap-plain colored text-icons',  iconTail: 'devicon-tailwindcss-plain colored text-icons pl-5'},
    { name: 'Databases', icon: 'devicon-mysql-plain colored text-icons'},
];

export default function About() {
    return (
        <>
        <section>
            <div id="skills" className='pt-11 container mx-auto px-4'>
                <p className='text-center text-skills text-cyan-500'>{i18n.t('skills.mySkills')}</p>
                <div className='md:grid grid-rows-3 grid-flow-col gap-5'>
                    {technologies.map((item) => {
                        return (
                            <div className='mt-12 md:mt-0'>
                                <p className='text-emerald-50 text-skills2 border-l-4 border-cyan-500 pl-2 mb-5'>{item.name} </p>
                                <i className={item.icon}></i>
                                <i className={item.iconCss}></i>
                                <i className={item.iconJs}></i>
                                <i className={item.iconTail}></i>
                                <i className={item.githubIcon}></i>
                                <i className={item.iconLinux}></i>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        </>
    )
}