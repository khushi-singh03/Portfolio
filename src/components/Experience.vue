<!-- <script setup>
import { ref } from 'vue'

const cardColors = ['#FFEBEE', '#E8F5E9', '#E3F2FD']

const experienceData = ref([
  {
    company_name: 'TechSoft Pvt Ltd',
    logo: 'https://via.placeholder.com/60x60?text=TechSoft',
    position: 'Frontend Developer Intern',
    jobType: 'Internship',
    start_date: 'Jan 2024',
    end_date: 'Apr 2024',
    location: 'Bangalore, India',
    is_onsite: false,
    description:
      'Developed responsive web pages using HTML, CSS, JavaScript, worked with Vue.js/React.js for dynamic components, converted Figma designs to code, ensured cross-browser compatibility, debugged and optimized UI performance, collaborated via GitHub in Agile teams, and gained hands-on experience in real-world frontend development.',
    showFullDescription: ref(false),
  },
  {
    company_name: 'CodeCraft',
    logo: 'https://via.placeholder.com/60x60?text=CodeCraft',
    position: 'Junior Web Developer',
    jobType: 'Part-time',
    start_date: 'May 2024',
    end_date: 'Present',
    location: 'Remote',
    is_onsite: false,
    description:
      'Maintaining and enhancing company websites. Handled several client-side projects using Vue.js, TailwindCSS, and REST APIs.',
    showFullDescription: ref(false),
  },
  {
    company_name: 'Creative Studio',
    logo: 'https://via.placeholder.com/60x60?text=Creative',
    position: 'Web Designer',
    jobType: 'Freelance',
    start_date: 'Jul 2023',
    end_date: 'Dec 2023',
    location: 'Delhi, India',
    is_onsite: true,
    description:
      'Designed creative layouts and user interfaces for startup clients using Figma, HTML/CSS, and Vue. Delivered 10+ projects on time.',
    showFullDescription: ref(false),
  },
])
</script> -->
<script setup>
import { ref } from 'vue'

const cardColors = ['#FFEBEE', '#E8F5E9', '#E3F2FD']

const experienceData = [
  {
    company_name: 'TechSoft Pvt Ltd',
    logo: 'https://via.placeholder.com/60x60?text=TechSoft',
    position: 'Frontend Developer Intern',
    jobType: 'Internship',
    start_date: 'Jan 2024',
    end_date: 'Apr 2024',
    location: 'Bangalore, India',
    is_onsite: false,
    description:
      'Developed responsive web pages using HTML, CSS, JavaScript, worked with Vue.js/React.js for dynamic components, converted Figma designs to code, ensured cross-browser compatibility, debugged and optimized UI performance, collaborated via GitHub in Agile teams, and gained hands-on experience in real-world frontend development.',
  },
  {
    company_name: 'CodeCraft',
    logo: 'https://via.placeholder.com/60x60?text=CodeCraft',
    position: 'Junior Web Developer',
    jobType: 'Part-time',
    start_date: 'May 2024',
    end_date: 'Present',
    location: 'Remote',
    is_onsite: false,
    description:
      'Maintaining and enhancing company websites. Handled several client-side projects using Vue.js, TailwindCSS, and REST APIs.',
  },
  {
    company_name: 'Creative Studio',
    logo: 'https://via.placeholder.com/60x60?text=Creative',
    position: 'Web Designer',
    jobType: 'Freelance',
    start_date: 'Jul 2023',
    end_date: 'Dec 2023',
    location: 'Delhi, India',
    is_onsite: true,
    description:
      'Designed creative layouts and user interfaces for startup clients using Figma, HTML/CSS, and Vue. Delivered 10+ projects on time.',
  },
]

// ✅ Track only one index that is expanded
const expandedCardIndex = ref(null)

function toggleDescription(index) {
  expandedCardIndex.value = expandedCardIndex.value === index ? null : index
}
</script>

<template>
  <v-container id="experience" class="py-12">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="experience-heading">Experience</h2>
        <div class="custom-divider-wrapper">
          <div class="custom-divider"></div>
          <div class="custom-divider"></div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" align="start" class="gap-6">
      <v-col
        v-for="(experience, index) in experienceData"
        :key="experience.company_name"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
        style="height: 100%"
      >
        <v-card
          :style="{ backgroundColor: cardColors[index % cardColors.length], height: '100%' }"
          class="experience-card pa-6 d-flex flex-column justify-space-between"
          elevation="5"
        >
          <!-- Top content -->
          <div class="text-center flex-grow-0">
            <h3 class="text-h6 font-weight-bold mb-1 position-title">
              {{ experience.position }}
            </h3>
            <p class="text-body-2 font-weight-medium mb-2">
              {{ experience.company_name }} • {{ experience.jobType }}<br />
              {{ experience.start_date }} — {{ experience.end_date || 'Present' }}<br />
              {{ experience.location }} • {{ experience.is_onsite ? 'On-site' : 'Remote' }}
            </p>
          </div>

          <!-- Description -->
          <div class="mt-2 text-body-2 text-center flex-grow-1 d-flex align-start">
            <div>
              <div v-if="expandedCardIndex === index">
                {{ experience.description }}
                <span class="see-more-toggle" @click="toggleDescription(index)"> See Less </span>
              </div>
              <div v-else>
                {{ experience.description.slice(0, 100) }}
                <span v-if="experience.description.length > 100">
                  ...
                  <span class="see-more-toggle" @click="toggleDescription(index)"> See More </span>
                </span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.experience-card {
  min-height: 100%;
  width: 90%;
  transition: transform 0.3s ease;
  border: none;
  display: flex;
  flex-direction: column;
}

.experience-card:hover {
  transform: scale(1.03);
}

.position-title {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.see-more-toggle {
  color: #1976d2 !important;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
}

/* Divider styles */
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
