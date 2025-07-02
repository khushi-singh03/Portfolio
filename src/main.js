import { createApp } from 'vue'
import App from './App.vue'

// Vue Router
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

// Global CSS
import './assets/portfolio-style.css'

// Vuetify Icon Fonts
import '@mdi/font/css/materialdesignicons.css'

// AOS (Animate On Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  once: true, // Only animate once
  duration: 800, // Animation duration (ms)
  offset: 100, // Offset (px) before triggering
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
        },
      },
      dark: {
        colors: {
          primary: '#2196F3',
          secondary: '#757575',
          accent: '#FF4081',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
