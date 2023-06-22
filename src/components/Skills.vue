<template>
<div class="w-full" id="skills">
    <p class="text-center pt-5 text-5xl text-gray-700">Skills</p>
  <div class="md:grid grid-rows-3 grid-flow-col gap-5 p-10">
    <div v-for="skill in skills" :key="skill.id" class="text-3xl mb-8 md:mb-0 mt-4">
        <p class="border-l-4 border-purple-950 mb-4 text-xl md:text-3xl">  
            <span class="pl-2">{{skill.name}}</span>
        </p>

        <i :class="['text-6xl', skill.icon]"></i>
        <i :class="['text-6xl', skill.iconVue]"></i>
        <i :class="['text-6xl', skill.iconCss]"></i>
        <i :class="['text-6xl', skill.iconJs]"></i>
        <i :class="['text-6xl', skill.iconTail]"></i>
        <i :class="['text-6xl', skill.githubIcon]"></i>
        <i :class="['text-6xl', skill.iconLinux]"></i>
    </div>
  </div>
  
</div>

</template>
<script>
export default {
    name: 'SkillsName',
    data() {
        return {
            skills: [
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
                    name: 'Controle de versão', 
                    icon: 'devicon-git-plain colored text-icons', 
                    githubIcon: 'devicon-github-original colored text-icons pl-5'
                },
                { 
                    id: 3,
                    name: 'Framework Front-end', 
                    icon: 'devicon-vuejs-plain-wordmark ',
                    iconVue: 'devicon-react-original colored text-icons pl-5'
                },
                { 
                    id: 4,
                    name: 'Framework Back-end', 
                    icon: 'devicon-laravel-plain colored text-icons' 
                },
                { 
                    id: 5,
                    name:'Sistema operacional', 
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
            ]
        }
    }
}
</script>