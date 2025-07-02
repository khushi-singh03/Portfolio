<template>
  <v-container class="text-body-1 text-secondary">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="px-4 py-10">
          <h2 class="text-h4 font-weight-bold mb-2 text-center">About Me</h2>

          <div class="custom-divider-wrapper mb-8">
            <div class="custom-divider"></div>
            <div class="custom-divider"></div>
          </div>
        </div>
        <h2 class="text-h5 font-weight-bold mb-4">🧑‍💻 Who Am I?</h2>
        <p>
          Hi! I'm <strong>Khushi Singh</strong>, a passionate frontend developer with a love for
          crafting beautiful, user-focused websites using <strong>Vue</strong>,
          <strong>Vuetify</strong>, and <strong>React</strong>. I blend creativity with code to
          bring ideas to life and make digital experiences smooth and accessible.
        </p>

        <h2 class="text-h6 mt-6 font-weight-bold">🌱 My Journey</h2>
        <p>
          I didn’t start with a computer science degree. In fact, I began with a
          <strong>BA</strong>—but my curiosity led me into tech. I’ve self-taught, experimented, and
          practiced daily to build the developer I am today. If there’s one thing I’ve learned, it’s
          that <em>consistency beats perfection</em>.
        </p>

        <h2 class="text-h6 mt-6 font-weight-bold">🎯 My Mission</h2>
        <p>
          I aim to become a <strong>product builder</strong> and join top companies like
          <strong>Google</strong>, where innovation meets impact. I'm not just learning to code; I'm
          learning to solve problems, collaborate globally, and build things that matter.
        </p>

        <!-- See More Content -->
        <div v-if="showMore">
          <h2 class="text-h6 mt-6 font-weight-bold">💡 Fun Facts About Me</h2>
          <ul>
            <li>I treat bugs like mini-puzzles and celebrate fixing them like small victories.</li>
            <li>My design style? <strong>Minimal, clean, and meaningful.</strong></li>
            <li>I’m a huge fan of learning — from JavaScript frameworks to UX design insights.</li>
            <li>
              I believe soft skills like communication and mindset are just as important as hard
              skills.
            </li>
          </ul>

          <h2 class="text-h6 mt-6 font-weight-bold">📌 Currently Learning</h2>
          <ul>
            <li>Vue 3 + Vuetify</li>
            <li>Tailwind CSS</li>
            <li>Backend with Node.js (next goal!)</li>
            <li>Building confidence, one project at a time</li>
          </ul>

          <h2 class="text-h6 mt-6 font-weight-bold">🔥 Optional Add-Ons</h2>
          <ul>
            <li>
              A timeline with key milestones (e.g., “First line of code – 2024”, “First Project –
              2025”, “Learning React – Present”)
            </li>
            <li>
              A “This or That” section like:
              <ul>
                <li>Coffee ☕ or Tea 🍵</li>
                <li>Dark Mode 🌑 or Light Mode ☀️</li>
                <li>Code First 👨‍💻 or Design First 🎨</li>
              </ul>
            </li>
            <li>An interactive animation or hover effect that reveals more about you</li>
            <li>
              A quote you believe in (e.g., <em>“Code is poetry when written with purpose.”</em>)
            </li>
          </ul>
        </div>

        <!-- See More / See Less Button -->
        <v-btn variant="text" class="mt-4 text-primary" @click="showMore = !showMore">
          {{ showMore ? 'See Less' : 'See More' }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Social Icons -->
    <!-- <v-row class="pt-6" align="center" justify="center" dense>
      <v-col cols="auto" v-for="(item, index) in links" :key="index">
        <a :href="item.url" target="_blank" rel="noopener">
          <v-btn icon variant="outlined" class="rounded-md" :aria-label="item.aria" color="grey">
            <Icon :icon="item.icon" width="24" height="24" class="text-grey-darken-2" />
          </v-btn>
        </a>
      </v-col>
    </v-row> -->
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
// import { Icon } from '@iconify/vue'

const showMore = ref(false)

// const links = [
//   {
//     aria: 'Facebook',
//     url: 'https://web.facebook.com/asfak00/',
//     icon: 'hugeicons:facebook-02',
//   },
//   {
//     aria: 'LinkedIn',
//     url: 'https://www.linkedin.com/in/asfakahmed/',
//     icon: 'hugeicons:linkedin-02',
//   },
//   {
//     aria: 'Twitter',
//     url: 'https://x.com/Asfak00',
//     icon: 'hugeicons:new-twitter',
//   },
//   {
//     aria: 'GitHub',
//     url: 'https://github.com/Asfak00',
//     icon: 'hugeicons:github',
//   },
//   {
//     aria: 'YouTube',
//     url: 'https://www.youtube.com/channel/UCRGavtEbJEwr_FmxYtLF7bA',
//     icon: 'hugeicons:youtube',
//   },
//   {
//     aria: 'Hashnode Blog',
//     url: 'https://asfakahmedsblog.hashnode.dev/',
//     icon: 'simple-icons:hashnode',
//   },
// ]
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
