import React from 'react';
import { i18n } from '../../translate/i18n';

export default function About() {
    return (
        <>
            <div id="about" className='container mx-auto pt-10'>
                <p className='text-center text-xl text-cyan-500'>{i18n.t('header.about')}</p>
                <p className='text-center text-lg text-emerald-50'>{i18n.t('about.descriptionAboutMe')}</p>
                <p className='text-center text-lg text-emerald-50'>{i18n.t('about.description')}</p>
            </div>
        </>
    )
}