<template>
  <v-app-bar
    flat
    elevate-on-scroll
    :color="isDark ? '#fce4ec' : '#880e4f'"
    :dark="!isDark"
    class="custom-navbar"
  >
    <v-app-bar-title class="brand">Khushi Singh</v-app-bar-title>

    <v-spacer />

    <div class="d-none d-sm-flex align-center">
      <v-btn text class="nav-link" @click="scrollTo('#home')">Home</v-btn>
      <v-btn text class="nav-link" @click="scrollTo('#about')">About</v-btn>
      <v-btn text class="nav-link" @click="scrollTo('#skills')">Skills</v-btn>
      <v-btn text class="nav-link" @click="scrollTo('#projects')">Projects</v-btn>
      <v-btn text class="nav-link" @click="scrollTo('#experience')">Experience</v-btn>
      <v-btn text class="nav-link" @click="scrollTo('#resume')">Resume</v-btn>
      <v-btn text class="nav-link" @click="scrollTo('#contact')">Contact</v-btn>
    </div>

    <v-btn icon @click="toggleTheme">
      <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { inject } from 'vue'

const isDark = inject('isDark')
const toggleTheme = inject('toggleTheme')

const scrollTo = (selector) => {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.nav-link {
  color: rgb(13, 4, 4);
}
.brand {
  color: rgb(7, 2, 2);
}
</style>
