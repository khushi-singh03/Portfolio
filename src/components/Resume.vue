<template>
  <v-container class="py-12">
    <h2 class="text-h4 font-weight-bold mb-6 text-center">My Resume</h2>
    <div class="custom-divider-wrapper mb-8">
      <div class="custom-divider"></div>
      <div class="custom-divider"></div>
    </div>

    <v-timeline align="start">
      <v-timeline-item
        v-for="item in resumeData"
        :key="item.title"
        :dot-color="item.color"
        :icon="item.icon"
      >
        <v-card elevation="2" class="pa-3" style="background-color: aliceblue">
          <h3 class="text-subtitle-1 font-weight-medium">{{ item.title }}</h3>
          <p class="text-body-2">{{ item.description }}</p>
          <small class="text-grey">{{ item.duration }}</small>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup>
const resumeData = [
  {
    title: 'Bachelor of Arts (BA)',
    description: 'PatliPutra University, 2021-2024',
    duration: '3 years',
    icon: 'mdi-school',
    color: 'primary',
  },
  {
    title: 'Frontend Developer Intern',
    description: 'Web Tech — Vue.js & Vuetify projects',
    duration: 'June 2025 - June 2025',
    icon: 'mdi-laptop',
    color: 'green',
  },
]
</script>
<style scoped>
.custom-divider-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.custom-divider {
  width: 70%;
  height: 5px;
  background-color: #1976d2;
  border-radius: 50px;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.4);
}
</style>
