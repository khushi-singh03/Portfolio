<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Layout from './Layout.vue'
import { VBtn, VIcon, VImg, VCard } from 'vuetify/components'

const props = defineProps({
  theme: {
    type: String,
    default: '',
  },
})

const titleText = ref('Front-End Web Developer')
const titleKey = ref(0)

const icons = [
  {
    component: '/smile.gif',
    name: 'react',
    width: 50,
    height: 50,
  },
  {
    component: '/robot.gif',
    name: 'vue',
    width: 150,
    height: 150,
  },
  {
    component: '/js.gif',
    name: 'js',
    width: 70,
    height: 70,
  },
]

const currentIcon = ref(null)
let intervalId = null
let textInterval = null

const getRandomIcon = () => {
  const availableIcons = icons.filter((icon) => icon !== currentIcon.value)
  return availableIcons[Math.floor(Math.random() * availableIcons.length)]
}

const startIconAnimation = () => {
  currentIcon.value = getRandomIcon()
  intervalId = setInterval(() => {
    currentIcon.value = getRandomIcon()
  }, 2000)
}

onMounted(() => {
  startIconAnimation()

  const placeholderTexts = [
    'Front-End Web Developer',
    'React Developer',
    'Javascript Developer',
    'Vue Developer',
  ]
  let index = 0

  textInterval = setInterval(() => {
    titleText.value = placeholderTexts[index]
    titleKey.value++
    index = (index + 1) % placeholderTexts.length
  }, 3000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  clearInterval(textInterval)
})
</script>

<template>
  <Layout id="home">
    <v-row align="center" justify="space-between" class="my-10">
      <!-- Intro Section -->
      <v-col cols="12" md="6">
        <p class="text-h6 text-grey">Hi, I'm Khushi</p>

        <!-- Transition Only Text -->
        <transition name="title-transition">
          <h1 :key="titleKey" class="text-h3 font-weight-bold">
            {{ titleText }}
          </h1>
        </transition>

        <!-- Static image below -->
        <v-img
          :src="theme === 'light' ? 'src/assets/khushi.jpeg' : 'src/assets/khushi.jpeg'"
          width="450"
          cover
          class="mt-6"
        />

        <p class="text-body-1 mt-2">
          I am Khushi Singh, a Front-End Web Developer with over 15days of experience Coding is my
          passion, and I excel at solving complex problems with creative solutions.
        </p>

        <div class="d-flex flex-column flex-sm-row align-center mt-6 gap-3">
          <!-- <VBtn
            href="src/assets/khushi.jpeg"
            target="_blank"
            color="primary"
            prepend-icon="mdi-calendar"
          >
            Schedule a meeting
          </VBtn> -->
          <VBtn href="#about-me" variant="outlined" color="primary">About Me</VBtn>
        </div>

        <!-- Animated Icons -->
        <!-- Animated Icon Section -->
        <transition name="icon-scale">
          <v-img
            v-if="currentIcon"
            :src="currentIcon.component"
            :height="currentIcon.height"
            :width="currentIcon.width"
            cover
          />
        </transition>
      </v-col>
    </v-row>
  </Layout>
</template>

<!-- <style scoped>
.icon-scale-enter-active,
.icon-scale-leave-active {
  transition: all 0.3s ease;
}

.icon-scale-enter-from,
.icon-scale-leave-to {
  opacity: 0;
  transform: scale(0.4);
}

.icon-scale-enter-to,
.icon-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

.title-transition-enter-active,
.title-transition-leave-active {
  transition: all 0.5s ease;
}

.title-transition-enter-from,
.title-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.title-transition-enter-to,
.title-transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style> -->
