import routes from './routes.js';
import { initListLength } from './score.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);
app.mount('#app'); // Mount immediately

// Load list length in the background
initListLength()
    .then(() => console.log("List length loaded"))
    .catch(err => console.error("Failed to load list length:", err));
