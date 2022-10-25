import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import store from "./vuex/store";

createApp(App).use(Quasar, quasarUserOptions).use(store).mount("#app");
