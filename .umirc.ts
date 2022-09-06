import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // devtool: 'inline-source-map',
  history: { type: 'hash' },
  // publicPath: pub_path[(process.env.UMI_ENV as keyof typeof pub_path) || 'dev'],
  routes: [
    {
      path: '/',
      // wrappers: ['@/wrappers/auth'],
      component: '@/pages/index',
    },
    {
      path: '/home',
      // wrappers: ['@/wrappers/auth'],
      component: '@/pages/home/index',
    },
  ],
  fastRefresh: {},
});
