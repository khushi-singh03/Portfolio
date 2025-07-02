<script setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const cardColors = [
  '#FFEBEE',
  '#E3F2FD',
  '#E8F5E9',
  '#FFF3E0',
  '#F3E5F5',
  '#E0F2F1',
  '#FFFDE7',
  '#FBE9E7',
  '#E1F5FE',
  '#E8EAF6',
]

const selectedGroup = ref('front_end')

const skillsData = [
  { name: 'HTML', icon: '<i class="fab fa-html5 fa-2x"></i>', group: 'front_end' },
  { name: 'CSS', icon: '<i class="fab fa-css3-alt fa-2x"></i>', group: 'front_end' },
  { name: 'JavaScript', icon: '<i class="fab fa-js fa-2x"></i>', group: 'front_end' },
  { name: 'React', icon: '<i class="fab fa-react fa-2x"></i>', group: 'front_end' },
  { name: 'Vue.js', icon: '<i class="fab fa-vuejs fa-2x"></i>', group: 'front_end' },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    group: 'tools',
  },
  { name: 'Git', icon: '<i class="fab fa-git-alt fa-2x"></i>', group: 'tools' },
  { name: 'GitHub', icon: '<i class="fab fa-github fa-2x"></i>', group: 'tools' },
]

const filteredSkills = (group) => {
  return skillsData.filter((skill) => skill.group === group)
}

const getRandomColor = () => {
  return cardColors[Math.floor(Math.random() * cardColors.length)]
}

// Determine current theme color for buttons
const getBtnColor = (btn) => {
  const isSelected = selectedGroup.value === btn
  return {
    backgroundColor: isSelected
      ? theme.global.current.value.dark
        ? '#ffffff'
        : '#000000'
      : 'transparent',
    color: isSelected
      ? theme.global.current.value.dark
        ? '#000000'
        : '#ffffff'
      : theme.global.current.value.dark
        ? '#ffffff'
        : '#000000',
    borderRadius: '30px',
    border: '1px solid #888',
    boxShadow: isSelected ? '0 2px 6px rgba(0,0,0,0.2)' : 'none',
  }
}
</script>

<template>
  <div class="px-4 py-10">
    <h2 class="text-h4 font-weight-bold mb-2 text-center">Skills</h2>

    <div class="custom-divider-wrapper mb-8">
      <div class="custom-divider"></div>
      <div class="custom-divider"></div>
    </div>

    <div class="d-flex justify-center mb-10">
      <v-btn-toggle v-model="selectedGroup" mandatory class="d-flex" style="gap: 1rem">
        <v-btn value="front_end" class="px-6" :style="getBtnColor('front_end')"> Frontend </v-btn>
        <v-btn value="tools" class="px-6" :style="getBtnColor('tools')"> Tools </v-btn>
      </v-btn-toggle>
    </div>

    <v-container fluid>
      <v-row justify="center" align="center" dense>
        <v-col
          v-for="(skill, index) in filteredSkills(selectedGroup)"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="2"
          class="pa-3"
        >
          <v-card
            class="skill-card"
            variant="elevated"
            :style="{ backgroundColor: getRandomColor() }"
            elevation="5"
          >
            <div class="d-flex flex-column align-center justify-center">
              <template v-if="skill.icon.startsWith('https')">
                <v-img :src="skill.icon" width="48" height="48" class="mb-3" />
              </template>
              <template v-else>
                <div v-html="skill.icon" class="mb-3" />
              </template>
              <div class="skill-text">{{ skill.name }}</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.skill-card {
  height: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease;
  border-radius: 16px;
}

.skill-card:hover {
  transform: scale(1.05);
}

.skill-text {
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  color: #212121;
}

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
