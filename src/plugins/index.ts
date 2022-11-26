export { default } from './vue';
import app from './vue';
import router from '@/router';
import { createPinia } from 'pinia';

app.use(createPinia());
app.use(router);
