<template>
  <div class="min-h-full">
    <Menu />
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <About />
      <Skills />
      <Projects />
     <Contact />
    </div>
     <Footer />
  </div>
</template>

<script>
import './assets/tailwind.css';
import Menu from './components/Menu.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';
import '@fortawesome/fontawesome-free/css/all.css';


export default {
  name: 'App',
  components: {
    Menu,
    About,
    Skills,
    Projects,
    Footer,
    Contact
  }
}
</script>


