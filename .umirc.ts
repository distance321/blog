import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'blog',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  menus: {
    '/http': [
      {
        title: 'http相关',
        path: '/http',
        children: [
          'http/index.md', 
        ],
      },
    ],
    '/css': [
      {
        title: 'css',
        path: '/css',
        children: [
          'css/index.md', 
        ],
      },
    ],
    '/js': [
      {
        title: 'js',
        path: '/js',
        children: [
          'js/index.md', 
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
