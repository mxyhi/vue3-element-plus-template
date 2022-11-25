# vite-vue3-elementplus-template

`vite` + `vue3` + `element-plus`+`ts`...开发模板,api/组件自动导入,无需手动/显示引入,即可使用的快速开发模板,支持 vueuse 暗色模式
scss/less/css 编译自动增加浏览器兼容前缀,在`.browserslistrc`中配置支持浏览器

## 自动导入 api:

- `vue3`
  api,自动导入,无需手动/显示引入,即可使用
- `element-plus`
  组件自动导入,无需手动/显示引入,即可使用
- `@element-plus/icons-vue`
  图标自动导入,使用时请在前面加上`IEp`\*,例如 `Open` 写成 `IEpOpen`
- `iconify-json/ep`
  图标自动导入,使用时请在前面加上`i-`\*,例如 `ep-open` 写成 `i-ep-open`,你可以在`vite.config.ts`中的`prefix`中配置

## 所含配置

- `vite`
- `vue3`
- `vue-router`
- `@vueuse/core`
- `vitest`
- `eslint`
- `prettier`
- `pinia`
- `typescript`
- `tailwindcss`
- `element-plus`
- `@element-plus/icons-vue`
- `@iconify-json/ep`
- `postcss`
- `postcss-preset-env`

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
