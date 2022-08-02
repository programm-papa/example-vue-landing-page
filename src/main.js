import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueYandexMetrika from 'vue-yandex-metrika'



createApp(App).use(store).use(router).use(VueYandexMetrika, {
    id: 89818994,
    router: router,
    env: "production"
    // env: process.env.NODE_ENV
    // other options
}).mount("#app");
