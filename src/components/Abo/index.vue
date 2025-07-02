<script setup>
import { ref } from 'vue'
import Hobby from '../Abo.vue/Hobby.vue'
import Education from '../Abo.vue/Education.vue'
import AboutMe from '../Abo.vue/AboutMe.vue'

const tabs = ['about_me', 'education', 'hobby']
const activeTab = ref('about_me')
const direction = ref('right')

const handleActiveTab = (tab) => {
  const currentIndex = tabs.indexOf(activeTab.value)
  const newIndex = tabs.indexOf(tab)
  direction.value = newIndex > currentIndex ? 'right' : 'left'
  activeTab.value = tab
}
</script>

<template>
  <v-container id="about-me" class="pt-16 pt-lg-8" fluid>
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h4 font-weight-bold">About Me</h2>
        <v-divider
          class="mx-auto my-2"
          style="width: 50%; height: 2px; background-color: #00bfa6"
        />
        <v-divider class="mx-auto" style="width: 70%; height: 3px; background-color: #00796b" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="6">
        <v-img
          src="https://i.ibb.co/1Mj9Nwx/asfakahmed.jpg"
          height="450"
          class="rounded-lg"
          cover
        />
      </v-col>

      <v-col cols="12" lg="6">
        <v-btn-toggle
          v-model="activeTab"
          mandatory
          class="rounded-pill border"
          style="width: 100%"
          color="primary"
        >
          <v-btn value="about_me" @click="handleActiveTab('about_me')" variant="text"
            >About Me</v-btn
          >
          <v-btn value="education" @click="handleActiveTab('education')" variant="text"
            >Education</v-btn
          >
          <v-btn value="hobby" @click="handleActiveTab('hobby')" variant="text">Hobby</v-btn>
        </v-btn-toggle>

        <v-expand-transition>
          <div v-if="activeTab === 'about_me'" class="mt-6"><AboutMe /></div>
        </v-expand-transition>

        <v-expand-transition>
          <div v-if="activeTab === 'education'" class="mt-6"><Education /></div>
        </v-expand-transition>

        <v-expand-transition>
          <div v-if="activeTab === 'hobby'" class="mt-6"><Hobby /></div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>
