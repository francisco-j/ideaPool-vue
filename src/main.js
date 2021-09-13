import { createApp, reactive } from 'vue'
import App from './App.vue'

const store =  reactive({ user: null });

createApp(App)
    .provide('store', store)
    .mount('#app')
