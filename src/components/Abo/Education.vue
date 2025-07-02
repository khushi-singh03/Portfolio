<script setup>
import { ref } from 'vue'

// Education data
const educationTimeline = ref([
  {
    title: 'Junior School Certificate (JSC)',
    date: 'November 2018',
    gpa: '2.74',
    description:
      'Completed from a reputed school with emphasis on foundational knowledge and co-curricular activities.',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    date: 'January 2021',
    gpa: '3.15',
    description:
      'Focused on science subjects with a keen interest in computer studies and mathematics.',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    date: 'January 2023',
    gpa: '3.50',
    description:
      'Specialized in science stream. Participated in inter-school competitions, debates, and coding contests which improved my analytical and logical thinking skills.',
  },
])

// For tracking which card is expanded (per index)
const expanded = ref(Array(educationTimeline.value.length).fill(false))

const toggleReadMore = (index) => {
  expanded.value[index] = !expanded.value[index]
}

const randomColors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#D1C4E9', '#FFF9C4', '#B2DFDB']
</script>

<template>
  <v-container class="text-body-1 text-secondary">
    <h2 class="text-h4 font-weight-bold mb-2 text-center">Education</h2>
    <div class="custom-divider-wrapper mb-8">
      <div class="custom-divider"></div>
    </div>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <p class="edu-text">
          I completed my education at <strong>Prabhunath College</strong>, a well-known institution
          in my village. This college played a significant role in shaping my academic foundation
          and personal growth.
        </p>
      </v-col>
    </v-row>

    <!-- Education Cards -->
    <v-row justify="center" align="stretch" class="mt-4" no-gutters>
      <v-col
        v-for="(edu, index) in educationTimeline"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="pa-2 d-flex"
      >
        <v-card
          flat
          class="pa-4 d-flex flex-column justify-space-between w-100"
          :style="{
            backgroundColor: randomColors[index % randomColors.length],
            borderRadius: '12px',
            height: '100%',
            minHeight: '240px',
          }"
        >
          <!-- Top content -->
          <div>
            <h3 class="text-h6 font-weight-bold mb-2" style="color: black">
              {{ edu.title }}
            </h3>
            <p class="text-caption text-dark"><strong>Completion Date:</strong> {{ edu.date }}</p>
            <p class="text-caption text-dark mt-1"><strong>GPA:</strong> {{ edu.gpa }}</p>

            <!-- Description -->
            <p class="text-caption text-dark mt-2" :class="{ 'truncate-text': !expanded[index] }">
              {{ edu.description }}
            </p>
          </div>

          <!-- Read More / Less -->
          <v-btn
            text
            size="small"
            class="mt-2 align-self-end"
            style="background-color: white"
            @click="toggleReadMore(index)"
          >
            {{ expanded[index] ? 'Read Less' : 'Read More' }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.truncate-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5rem;
  max-height: 4.5rem; /* 3 lines */
}

.edu-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--v-theme-on-surface);
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
