import { createApp } from 'vue';
import './style.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import App from './App.vue';
import { router } from './router/index';
import Component from '@coreui/vue';

createApp(App).use(Component).use(router).mount('#app');
