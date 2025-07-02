<script setup>
import AboutMe from './Abo/AboutMe.vue'
import Education from './Abo/Education.vue'
import Hobby from './Abo/Hobby.vue'
</script>

<template>
  <v-container id="about-me">
    <AboutMe />
    <Education />
    <Hobby />
  </v-container>
</template>

<style scoped>
#about-me {
  padding: 64px 24px;
  background-color: var(--v-background-base);
  scroll-margin-top: 80px;
}

#about-me > * {
  margin-bottom: 48px;
  padding: 32px;
  border-radius: 16px;
  background-color: var(--card-bg); /* ✅ Dynamic card color */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

#about-me > *:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* ... rest of your styles (unchanged) ... */
</style>
