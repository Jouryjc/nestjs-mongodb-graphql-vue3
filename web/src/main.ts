import { createApp } from 'vue';
import './style.css';
import '@idux/cdk/index.css';
import '@idux/components/default.css';
import App from './App.vue';
import { router } from './router/index';
import IduxCdk from '@idux/cdk';
import IduxComponents from '@idux/components';
import {
  addIconDefinitions,
  IDUX_ICON_DEPENDENCIES,
} from '@idux/components/icon';

addIconDefinitions(IDUX_ICON_DEPENDENCIES);

createApp(App).use(IduxComponents).use(IduxCdk).use(router).mount('#app');
