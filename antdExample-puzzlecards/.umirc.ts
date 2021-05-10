import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/puzzlecards', component: '@/pages/puzzlecards.js'}
  ],
  fastRefresh: {},
});
