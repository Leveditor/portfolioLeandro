import React from 'react';
import { i18n } from '../../translate/i18n';
import {project} from './project';


export default function Project() {
    return (
        <>
            <section>
                <div id="project" className='pt-11 container mx-auto px-4'>
                    <p className='text-center text-skills text-cyan-500 mb-5'>{i18n.t('header.projects')}</p>
                    <div className='md:grid grid-rows-2 grid-flow-col gap-5'>
                        {project.map((item) => {
                            return (
                                <div className='border-2 rounded border-cyan-500 p-4 text-emerald-50'>
                                    <img src={item.img} />
                                    <p className='pt-3'>{item.nameProject}</p>
                                    <p className='pt-3 pb-3'>{item.technologies}</p>
                                  
                                    <div className='flex justify-between'>
                                        <div>
                                            <i className={item.iconHTML}></i>
                                            <i className={item.iconCss}></i>
                                            <i className={item.iconReact}></i>
                                            <i className={item.iconTail}></i>
                                        </div>
                                        <div>
                                            <a href={item.linkGithub} target="_blank" className='bg-cyan-500 p-1 pl-3 pr-3 mr-2 rounded'>Projeto no GitHub</a>
                                            <a href={item.link} target="_blank" className='bg-cyan-500 p-1 pl-3 pr-3 rounded'>WEB</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className='flex justify-center mt-4'>
                <a href="https://github.com/Leveditor" className='text-emerald-50 bg-cyan-500 p-2 rounded'
                     target="_blank">{i18n.t('skills.projectGithub')}</a>
                </div>
            </section>
        </>
    )
}