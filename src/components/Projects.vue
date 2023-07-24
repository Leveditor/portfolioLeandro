<template>
    <div class="mb-10" id="projects">
        <div class="border-b md:mt-12 mb-4 w-full"></div>
        <p class="text-center pt-5 text-5xl text-gray-700">Projetos</p>
        <div class="md:grid grid-cols-2 gap-5 mt-5">
            <div v-for="projects in projectsImages" :key="projects.id0" class="border rounded shadow-lg p-5 text-gray-600 text-justify">
                <img :src=projects.imagem />
                <div class="border-b mt-2 mb-4 w-full"></div>
                <p>{{ projects.description }}</p>
                <p class="pt-2">{{ projects.FrontEnd }}</p>
                <p class="pt-2">{{ projects.BackEnd }}</p>
                <div class="flex justify-end">
                    <a :href="projects.link" target="_blank" class="bg-purple-950 hover:bg-purple-900 text-white p-1 rounded px-4 ">Projeto online</a>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-5 mb-5 md:mb-5">
            <a href="https://github.com/Leveditor?tab=repositories" target="_blank" class="bg-purple-950 hover:bg-purple-900 text-white p-1 rounded px-4">Ver projetos no Github</a>
        </div>
        <div class="border-b md:mt-12 mb-4 w-full"></div>
    </div>
</template>
<script>
import bradescoImagem from '@/assets/bradesco.png';
import porto from '@/assets/porto.png';
import movie from '@/assets/movie.png';
import convert from '@/assets/convert.png';

export default {
    name: 'ProjectName',
    data() {
        return {
            projectsImages: [
                { 
                    id: 0,
                    imagem: bradescoImagem, 
                    description: 'Sistema de reservas de hotéis exclusivo para funcionários do Bradesco. Como desenvolvedor responsável pelo Front-end, criei esta aplicação que oferece aos funcionários do banco uma plataforma intuitiva e conveniente para realizar suas reservas de hospedagem.',
                    FrontEnd: 'Front-end: Vue.js, HTML, CSS e Tailwind',
                    BackEnd: 'Back-end: PHP, Laravel',
                    link: 'http://bradesco.incentivehoteis.com.br/'
                },
                { 
                    id: 1,
                    imagem: porto, 
                    description: 'Sistema de reservas de hotéis exclusivo para funcionários da Porto Seguro. Como desenvolvedor responsável pelo Front-end, criei esta aplicação que oferece aos funcionários da Porto Seguro uma plataforma intuitiva e conveniente para realizar suas reservas de hospedagem.',
                    FrontEnd: 'Front-end: Vue.js, HTML, CSS e Tailwind',
                    BackEnd: 'Back-end: PHP, Laravel',
                    link: 'http://porto.incentivehoteis.com.br/'
                },
                { 
                    id: 2,
                    imagem: movie, 
                    description: 'Desenvolvi um site inovador que consome a API do The Movie DB e exibe uma ampla seleção de filmes disponíveis. Utilizando minhas habilidades de desenvolvimento web, criei uma plataforma que oferece aos usuários acesso fácil e conveniente a uma vasta biblioteca cinematográfica.',
                    FrontEnd: 'Front-end: React.js, HTML, CSS e Tailwind',
                    link: 'https://moviesprojectreact.netlify.app/'
                },
                { 
                    id: 3,
                    imagem: convert, 
                    description: 'Desenvolvi um site de conversão de moedas altamente eficiente, que utiliza uma API especializada para fornecer informações atualizadas sobre taxas de câmbio. Com essa ferramenta, os usuários podem converter valores monetários de forma rápida e precisa entre diferentes moedas.',
                    FrontEnd: 'Front-end: Vue.js, HTML, CSS e Tailwind',
                    link: 'https://currencyconvertervue.netlify.app/'
                },
            ]
        }
    }
}
</script>