import { i18n } from '../../translate/i18n';


export const technologies = [
    { 
        id: 0,
        name: 'Front-end',
        icon: 'devicon-html5-plain colored text-icons',
        iconCss : 'devicon-css3-plain colored text-icons pl-5',
        iconJs : 'devicon-javascript-plain colored text-icons pl-5'
    },
    { 
        id: 1,
        name: 'Back-end', 
        icon: 'devicon-php-plain colored text-icons'
    },
    { 
        id: 2,
        name: i18n.t('skills.git'), 
        icon: 'devicon-git-plain colored text-icons', 
        githubIcon: 'devicon-github-original colored text-icons pl-5'
    },
    { 
        id: 3,
        name: 'Framework Front-end', 
        icon: 'devicon-react-original colored text-icons'
    },
    { 
        id: 4,
        name: 'Framework Back-end', 
        icon: 'devicon-laravel-plain colored text-icons' 
    },
    { 
        id: 5,
        name: i18n.t('skills.system'), 
        icon: 'devicon-windows8-original colored text-icons', 
        iconLinux: 'devicon-linux-plain colored text-icons pl-5'
    },
    { 
        id: 6,
        name: 'Framework CSS', 
        icon: 'devicon-bootstrap-plain colored text-icons',  
        iconTail: 'devicon-tailwindcss-plain colored text-icons pl-5'
    },
    { 
        id: 7,
        name: 'Databases', 
        icon: 'devicon-mysql-plain colored text-icons'
    },
];

export default technologies;