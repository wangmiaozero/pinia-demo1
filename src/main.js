import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// router
import router from "./router";

const app = createApp(App);

app
.use(router)
.use(store)
.mount('#app')