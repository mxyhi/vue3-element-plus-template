import { createApp } from 'vue';

import App from '@/App.vue';

const app = createApp(App);

export default app;

// 注册（对象形式的指令）
app.directive('my-directive', {
  /* 自定义指令钩子 */
});

// 注册（函数形式的指令）
app.directive('my-directive', () => {
  /* ... */
});
