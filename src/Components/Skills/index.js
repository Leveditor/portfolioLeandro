import React from 'react';
import { i18n } from '../../translate/i18n';
import { technologies } from './skills';

export default function About() {
    return (
        <>
        <section>
            <div id="skills" className='pt-11 container mx-auto px-4'>
                <p className='text-center text-skills text-cyan-500'>{i18n.t('skills.mySkills')}</p>
                <div className='md:grid grid-rows-3 grid-flow-col gap-5'>
                    {technologies.map((item) => {
                        return (
                            <div key={item.id} className='mt-12 md:mt-0'>
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