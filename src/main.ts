import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { createPinia } from "pinia";

/** instace app */
const app = createApp(App);

/** use plungins */
app.use(createPinia());

/** mouting element */
app.mount("#app");
