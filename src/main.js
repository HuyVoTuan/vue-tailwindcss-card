import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import TheCard from './components/base-components/TheCard.vue'
import TheButton from './components/base-components/TheButton.vue'

/* add icons to the library */
library.add(fas)

const app = createApp(App)

app.component('the-card', TheCard)
app.component('the-button', TheButton)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
