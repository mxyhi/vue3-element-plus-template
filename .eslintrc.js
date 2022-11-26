require('@rushstack/eslint-patch/modern-module-resolution');
/* eslint-env node */

const vueApi = {
  EffectScope: true,
  computed: true,
  createApp: true,
  customRef: true,
  defineAsyncComponent: true,
  defineComponent: true,
  effectScope: true,
  getCurrentInstance: true,
  getCurrentScope: true,
  h: true,
  inject: true,
  isProxy: true,
  isReactive: true,
  isReadonly: true,
  isRef: true,
  markRaw: true,
  nextTick: true,
  onActivated: true,
  onBeforeMount: true,
  onBeforeUnmount: true,
  onBeforeUpdate: true,
  onDeactivated: true,
  onErrorCaptured: true,
  onMounted: true,
  onRenderTracked: true,
  onRenderTriggered: true,
  onScopeDispose: true,
  onServerPrefetch: true,
  onUnmounted: true,
  onUpdated: true,
  provide: true,
  reactive: true,
  readonly: true,
  ref: true,
  resolveComponent: true,
  resolveDirective: true,
  shallowReactive: true,
  shallowReadonly: true,
  shallowRef: true,
  toRaw: true,
  toRef: true,
  toRefs: true,
  triggerRef: true,
  unref: true,
  useAttrs: true,
  useCssModule: true,
  useCssVars: true,
  useSlots: true,
  watch: true,
  watchEffect: true,
  watchPostEffect: true,
  watchSyncEffect: true,
};

/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  env: { es2021: true, browser: true },
  overrides: [
    {
      files: ['*.spec.*'],
      env: { es2021: true, node: true },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue'],
  globals: {
    ...vueApi,
  },
  rules: {
    'no-var': ['off'], // 要求使用 let 或 const 而不是 var
    quotes: ['off', 'single'], //要求引号类型 `` ' ''
    semi: ['warn', 'always'], //语句强制分号结尾
    indent: ['warn', 2],
    'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值,
    'linebreak-style': ['warn', 'unix'], // 行尾序列
  },
}
