<script setup>
import Layout from './Layout.vue'
</script>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // Create a reactive state to track expanded descriptions
    const expandedDescriptions = ref(
      projectsData.reduce((acc, project) => {
        acc[project.name] = false
        return acc
      }, {}),
    )

    // Toggle description expansion
    const toggleDescription = (projectName) => {
      expandedDescriptions.value[projectName] = !expandedDescriptions.value[projectName]
    }

    return {
      expandedDescriptions,
      toggleDescription,
      projectsData,
    }
  },
}
</script>

<template>
  <Layout id="projects" class="pt-8">
    <div class="text-center pt-12">
      <h4 class="text-h4 font-weight-bold">Projects</h4>
      <div class="custom-divider-wrapper mb-8">
        <div class="custom-divider"></div>
        <div class="custom-divider"></div>
      </div>
    </div>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="project in projectsData" :key="project.name" cols="12" sm="6" md="4">
          <v-card class="rounded-lg" elevation="3" border>
            <v-img
              :src="project.thumbnail"
              :alt="project.name"
              height="210"
              cover
              class="rounded-t-lg"
            ></v-img>

            <v-card-text>
              <h3 class="text-h6 font-weight-medium">{{ project.name }}</h3>

              <div class="text-body-2 mt-1">
                <template v-if="!expandedDescriptions[project.name]">
                  {{ project.description.slice(0, 90) }}
                  <span
                    v-if="project.description.length > 100"
                    class="text-primary text-decoration-underline cursor-pointer"
                    @click="toggleDescription(project.name)"
                  >
                    See More
                  </span>
                </template>
                <template v-else>
                  {{ project.description }}
                  <span
                    class="text-primary text-decoration-underline cursor-pointer"
                    @click="toggleDescription(project.name)"
                  >
                    See Less
                  </span>
                </template>
              </div>

              <div class="mt-3">
                <p class="text-subtitle-2 font-weight-bold">Technology:</p>
                <v-chip-group column class="mt-2">
                  <v-chip
                    v-for="tag in project.tags"
                    :key="tag"
                    class="ma-1"
                    variant="outlined"
                    size="small"
                    color="primary"
                    label
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>

              <div class="d-flex align-center gap-2 mt-4">
                <v-btn
                  :href="project.live"
                  target="_blank"
                  color="primary"
                  prepend-icon="mdi-link-variant"
                  variant="elevated"
                  size="small"
                >
                  Live
                </v-btn>

                <v-btn
                  :href="project.github"
                  target="_blank"
                  :disabled="!project.github"
                  color="secondary"
                  prepend-icon="mdi-github"
                  variant="outlined"
                  size="small"
                >
                  Github
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
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
