import { i18n } from '../../translate/i18n';
import imgMovie from '../../Img/movie.png';
import imgCalc from '../../Img/calculadora.png';
import imgLogin from '../../Img/login.png';
import imgCep from '../../Img/cep.png';
import qrcode from '../../Img/qrcode.png';
import form from '../../Img/form.png';

export const project = [
    { 
        id: 0,
        nameProject: i18n.t('projectMovie.description'),
        technologies:  i18n.t('projectMovie.technologies'),
        linkGithub: 'https://github.com/Leveditor/Movie2.0',
        link: 'https://moviesprojectreact.netlify.app/',
        img: imgMovie, 
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject pr-2',
        iconTail: 'devicon-tailwindcss-plain colored text-iconsProject'
    },
    { 
        id: 1,
        nameProject: i18n.t('projectLogin.description'),
        technologies: i18n.t('projectLogin.technologies'),
        linkGithub: 'https://github.com/Leveditor/telaLogin',
        link: 'https://jolly-fermi-db94ac.netlify.app/',
        img: imgLogin,
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject', 
    },
    { 
        id: 2,
        nameProject: i18n.t('projectCal.description'),
        technologies: i18n.t('projectCal.technologies'),
        linkGithub: 'https://github.com/Leveditor/Calculadora',
        link: 'https://wonderful-raman-bddbb0.netlify.app/',
        img: imgCalc,
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject'
    },
    { 
        id: 3,
        nameProject: i18n.t('projectCep.description'),
        technologies: i18n.t('projectCep.technologies'),
        linkGithub: 'https://github.com/Leveditor/Cep',
        link: 'https://react-cep.netlify.app/',
        img: imgCep, 
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject pr-2',
        iconTail: 'devicon-tailwindcss-plain colored text-iconsProject'
    },
    { 
        id: 4,
        nameProject: i18n.t('projectQrcode.description'),
        technologies: i18n.t('projectQrcode.technologies'),
        linkGithub: 'https://github.com/Leveditor/qrcodeReact',
        link: 'https://qrcodereact.netlify.app/',
        img: qrcode, 
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject pr-2',
    },
    { 
        id: 5,
        nameProject: i18n.t('projectForm.description'),
        technologies: i18n.t('projectForm.technologies'),
        linkGithub: 'https://github.com/Leveditor/form-hooks',
        link: 'https://formhooks.netlify.app/',
        img: form, 
        iconHTML: 'devicon-html5-plain colored text-iconsProject pr-2',
        iconCss : 'devicon-css3-plain colored text-iconsProject pr-2',
        iconReact: 'devicon-react-original colored text-iconsProject pr-2',
        iconBootstrap: 'devicon-bootstrap-plain colored text-iconsProject',  
    },
];

export default project;