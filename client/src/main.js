import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(ElementPlus);
app.use(store).use(router).mount('#app');
