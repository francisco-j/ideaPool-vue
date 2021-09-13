import { createApp, reactive } from 'vue'
import App from './App.vue'

const store =  reactive({
    user: localStorage.getItem('idea-pool-user')
});

createApp(App)
    .provide('store', store)
    .mount('#app')
