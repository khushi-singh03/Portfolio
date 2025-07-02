<script setup>
import { ref } from 'vue'

const hobbies = [
  {
    title: 'Photography',
    description:
      'Capturing moments through the lens gives me a creative outlet and helps me appreciate the beauty around me.',
  },
  {
    title: 'Traveling',
    description:
      'Exploring new places, meeting people, and experiencing different cultures inspire me and keep life exciting.',
  },
  {
    title: 'Playing Chess',
    description:
      'Playing chess is a valuable part of my personal growth. It helps me relieve stress, sharpens my strategic thinking, and provides meaningful mental engagement.',
  },
]

// Track read more/less state for each card

const expanded = ref(Array(hobbies.length).fill(false))

const toggleExpand = (index) => {
  expanded.value[index] = !expanded.value[index]
}

// Random color options for card backgrounds
const randomColors = ['#FFE0B2', '#C5E1A5', '#B3E5FC', '#D7CCC8', '#F8BBD0', '#D1C4E9']
</script>

<template>
  <v-container class="text-body-1 text-secondary">
    <h2 class="text-h4 font-weight-bold mb-2 text-center">Hobby</h2>
    <div class="custom-divider-wrapper mb-8">
      <div class="custom-divider"></div>
    </div>

    <v-row>
      <v-col cols="12">
        <h4>I have a diverse set of hobbies that bring me joy and keep me motivated:</h4>
      </v-col>
    </v-row>

    <v-row class="mt-4" align="start">
      <v-col
        v-for="(hobby, index) in hobbies"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="pa-2 d-flex"
      >
        <v-card
          flat
          class="pa-4 d-flex flex-column justify-space-between"
          :style="{
            backgroundColor: randomColors[index % randomColors.length],
            borderRadius: '12px',
            width: '100%',
          }"
        >
          <div>
            <h3 class="text-h6 font-weight-bold mb-2" style="color: black">
              {{ hobby.title }}
            </h3>

            <v-expand-transition>
              <p class="text-body-2 text-dark">
                <template v-if="expanded[index]">
                  {{ hobby.description }}
                </template>
                <template v-else>
                  {{ hobby.description.slice(0, 80) }}
                  <span v-if="hobby.description.length > 80">...</span>
                </template>
              </p>
            </v-expand-transition>
          </div>

          <v-btn
            variant="text"
            size="small"
            class="mt-2"
            @click="toggleExpand(index)"
            style="align-self: flex-start; color: #333"
          >
            {{ expanded[index] ? 'Read Less' : 'Read More' }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <p class="mt-4">
          Above all, I love helping others in any way I can. Whether it’s solving a technical issue,
          sharing advice, or simply lending a listening ear, assisting people gives me a sense of
          fulfillment and purpose.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

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
