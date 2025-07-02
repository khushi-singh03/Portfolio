<!-- <script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Layout from './Layout.vue'
import { VBtn, VImg } from 'vuetify/components'

const props = defineProps({
  theme: {
    type: String,
    default: '',
  },
})

const titleText = ref('Front-End Web Developer')
const titleKey = ref(0)

const placeholderTexts = [
  'Front-End Web Developer',
  'React Developer',
  'JavaScript Developer',
  'Vue Developer',
]

let textInterval = null

onMounted(() => {
  let index = 0
  textInterval = setInterval(() => {
    titleText.value = placeholderTexts[index]
    titleKey.value++
    index = (index + 1) % placeholderTexts.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(textInterval)
})

// Dynamically apply text color based on theme
const textClass = computed(() => {
  return props.theme === 'dark' ? 'text-white' : 'text-black'
})
</script> -->
<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Layout from './Layout.vue'
import { VImg } from 'vuetify/components'
import { useTheme } from 'vuetify'

const theme = useTheme()

const titleText = ref('Front-End Web Developer')
const titleKey = ref(0)

const placeholderTexts = [
  'Front-End Web Developer',
  'React Developer',
  'JavaScript Developer',
  'Vue Developer',
]

let textInterval = null

onMounted(() => {
  let index = 0
  textInterval = setInterval(() => {
    titleText.value = placeholderTexts[index]
    titleKey.value++
    index = (index + 1) % placeholderTexts.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(textInterval)
})

// ✅ Vuetify theme check (light/dark)
const textClass = computed(() => {
  return theme.global.current.value.dark ? 'text-white' : 'text-black'
})
</script>

<template>
  <Layout id="home">
    <v-row align="center" justify="space-between" class="my-10">
      <!-- Left Column: Text Section -->
      <v-col cols="12" md="6">
        <p :class="['text-h5', textClass]">👋 Hi, I'm Khushi</p>

        <!-- Animated Text -->
        <transition name="title-transition" mode="out-in">
          <h1 :key="titleKey" :class="['text-h3', 'font-weight-bold', textClass]">
            {{ titleText }}
          </h1>
        </transition>

        <p :class="['text-body-1', 'mt-2', textClass]">
          I am Khushi Singh, a Front-End Web Developer with over 15 days of experience. Coding is my
          passion, and I excel at solving complex problems with creative solutions.
        </p>
      </v-col>

      <!-- Right Column: Static Small Image -->
      <v-col cols="10" md="3" class="d-flex justify-center">
        <v-img src="src/assets/khushi.jpeg" width="200" height="450" class="rounded-lg" cover />
      </v-col>
    </v-row>
  </Layout>
</template>

<style scoped>
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
</style>
