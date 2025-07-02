<!-- <script setup>
import { ref, watch, provide, onMounted, computed } from 'vue'
import { useTheme } from 'vuetify'

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import skills from './components/skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'

// Theme toggle logic
const theme = useTheme()
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}

// Change body background directly
watch(isDark, (val) => {
  document.body.style.backgroundColor = val ? '#4a0033' : '#fce4ec'
  document.body.classList.toggle('dark', val) // ✅ Adds/removes class
})

onMounted(() => {
  document.body.style.backgroundColor = isDark.value ? '#4a0033' : '#fce4ec'
  document.body.classList.toggle('dark', isDark.value) // ✅ Adds on load
})

// Provide to children
provide('isDark', isDark)
provide('toggleTheme', toggleTheme)

// Background class for v-main
const mainClass = computed(() => (isDark.value ? 'dark-bg' : 'light-bg'))
</script>

<template>
  <v-app>
    <Navbar />

    <v-main :class="mainClass">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </v-main>
  </v-app>
</template>

<style scoped>
section {
  scroll-margin-top: 100px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.dark-bg {
  background-color: #772842;
  transition: background-color 0.3s ease;
}
.light-bg {
  background-color: #fce4ec;
  transition: background-color 0.3s ease;
}
</style>

<style>
body {
  transition: background-color 0.3s ease;
}
:root {
  --card-bg-light: #ffffff;
  --card-bg-dark: #6a1b4d;
}

body.dark {
  --card-bg: var(--card-bg-dark);
}

body:not(.dark) {
  --card-bg: var(--card-bg-light);
}
</style>

<style>
/* Global styles */
body {
  transition: background-color 0.3s ease;
}

body.dark {
  color: black !important;
}

body.dark * {
  color: black !important;
}
:root {
  --card-bg-light: #ffffff;
  --card-bg-dark: #f3c2dd; /* Darker than background */
}

/* Set actual card color based on theme mode */
body.dark {
  --card-bg: var(--card-bg-dark);
}

body:not(.dark) {
  --card-bg: var(--card-bg-light);
}
</style> -->
<script setup>
import { ref, watch, provide, onMounted, computed } from 'vue'
import { useTheme } from 'vuetify'

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'

// Theme logic
const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)

const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark'
  theme.global.name.value = newTheme
}

// Sync isDark with Vuetify theme
watch(
  () => theme.global.name.value,
  (val) => {
    isDark.value = val === 'dark'
  },
)

// Set body background and class
// watch(isDark, (val) => {
//   document.body.style.backgroundColor = val ? '#4a0033' : '#fce4ec'
//   document.body.classList.toggle('dark', val)
// })

onMounted(() => {
  document.body.style.backgroundColor = isDark.value ? '#4a0033' : '#fce4ec'
  document.body.classList.toggle('dark', isDark.value)
})

// Provide to children if needed
provide('isDark', isDark)
provide('toggleTheme', toggleTheme)

const mainClass = computed(() => (isDark.value ? 'dark-bg' : 'light-bg'))
</script>

<template>
  <v-app>
    <Navbar />
    <v-main :class="mainClass">
      <section id="home"><Home :theme="isDark ? 'dark' : 'light'" /></section>
      <section id="about"><About /></section>
      <section id="skills"><skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </v-main>
  </v-app>
</template>

<style scoped>
section {
  scroll-margin-top: 100px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.dark-bg {
  background-color: #772842;
  transition: background-color 0.3s ease;
}
.light-bg {
  background-color: #fce4ec;
  transition: background-color 0.3s ease;
}
</style>

<style>
body {
  transition: background-color 0.3s ease;
}

/* Theme card colors */
:root {
  --card-bg-light: #ffffff;
  --card-bg-dark: #f3c2dd;
}

body.dark {
  --card-bg: var(--card-bg-dark);
}
body:not(.dark) {
  --card-bg: var(--card-bg-light);
}

/* ✅ Global black text in dark mode */
/* body.dark * {
  color: black !important;
} */

/* ✅ Home.vue = white in dark mode, black in light mode */
body.dark #home,
body.dark #home * {
  color: white !important;
}
body:not(.dark) #home,
body:not(.dark) #home * {
  color: black !important;
}
/* body.dark #contact,
body.dark #contact * {
  color: rgb(243, 238, 238) !important;
} */
body:not(.dark) #contact,
body:not(.dark) #contact * {
  color: rgb(3, 3, 3) !important;
}
body.dark #skills,
body.dark #skills * {
  color: rgb(1, 1, 1) !important;
}
/* body:not(.dark) #skills,
body:not(.dark) #skills * {
  color: black !important;
} */
body.dark #projects,
body.dark #projects * {
  color: rgb(3, 2, 2) !important;
}
body:not(.dark) #Project,
body:not(.dark) #projects * {
  color: black !important;
}
body.dark #resume,
body.dark #resume * {
  color: rgb(2, 0, 0) !important;
}
body:not(.dark) #resume,
body:not(.dark) #resume * {
  color: black !important;
}
body.dark #experience,
body.dark #experience * {
  color: rgb(9, 3, 3) !important;
}
/* body:not(.dark) #experience,
body:not(.dark) #experience * {
  color: black !important;
} */
body.dark #hobby,
body.dark #hobby * {
  color: rgb(3, 3, 3) !important;
}
body:not(.dark) #hobby,
body:not(.dark) #hobby * {
  color: black !important;
}
body.dark #about,
body.dark #about * {
  color: rgb(3, 3, 3) !important;
}
body:not(.dark) #about,
body:not(.dark) #about * {
  color: black !important;
}
</style>
