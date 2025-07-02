<template>
  <v-container class="py-12" id="contact">
    <h3 class="text-h3 text-center font-weight-bold mb-8" style="color: black">Contact Me</h3>
    <div class="custom-divider-wrapper mb-8">
      <div class="custom-divider"></div>
      <div class="custom-divider"></div>
    </div>

    <v-form>
      <v-text-field
        class="my-rounded-input"
        :class="theme.global.name.value === 'dark' ? 'input-dark' : 'input-light'"
        label="Name"
        required
      />
      <v-text-field
        class="my-rounded-input"
        :class="theme.global.name.value === 'dark' ? 'input-dark' : 'input-light'"
        label="Email"
        required
        type="email"
      />
      <v-textarea
        class="my-rounded-input"
        :class="theme.global.name.value === 'dark' ? 'input-dark' : 'input-light'"
        label="Message"
        rows="4"
        required
      />
      <v-btn color="#E8F5E9" class="mt-4">Send Message</v-btn>
    </v-form>

    <div class="text-center mt-6">
      <v-btn icon class="mx-2" href="mailto:youremail@example.com" target="_blank">
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn icon class="mx-2" href="https://github.com/yourusername" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn icon class="mx-2" href="https://linkedin.com/in/yourusername" target="_blank">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
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

<style>
/* Ensure icon buttons stay white in dark mode */
/* body.dark .v-btn.v-btn--icon {
  background-color: rgb(8, 8, 8) !important;
} */
</style>
