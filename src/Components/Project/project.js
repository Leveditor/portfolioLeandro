import { i18n } from '../../translate/i18n';
import imgMovie from '../../Img/movie.png';
import imgCalc from '../../Img/calculadora.png';
import imgLogin from '../../Img/login.png';
import imgCep from '../../Img/cep.png';

export const project = [
    { 
        nameProject: i18n.t('projectMovie.description'),
        technologies:  i18n.t('projectMovie.technologies'),
        img: imgMovie, 
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject pr-2',
        iconTail: 'devicon-tailwindcss-plain colored text-iconsProject'
    },
    { 
        nameProject: i18n.t('projectLogin.description'),
        technologies: i18n.t('projectLogin.technologies'),
        img: imgLogin,
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject', 
    },
    { 
        nameProject: i18n.t('projectCal.description'),
        technologies: i18n.t('projectCal.technologies'),
        img: imgCalc,
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject'
    },
    { 
        nameProject: i18n.t('projectCep.description'),
        technologies: i18n.t('projectCep.technologies'),
        img: imgCep, 
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject pr-2',
        iconTail: 'devicon-tailwindcss-plain colored text-iconsProject'
    },
];


export default {
    project,
}