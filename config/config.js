const path = require('path');

export default {
  favicon: 'https://gitee.com/llixianjie/m78/raw/master/public/logo-small.png',
  alias: {
    '@': path.resolve(__dirname, '../src'),
    m78: path.resolve(__dirname, '../src/components'),
  },
  title: 'M78',
  description: 'components, hooks, utils, part of the react toolchain',
  logo: 'https://gitee.com/llixianjie/m78/raw/master/public/logo-small.png',
  locales: [['zh-CN', '中文']],
  outputPath: 'docs',
  base: '/',
  publicPath: '/',
  resolve: {
    includes: ['src', './README.md'],
    excludes: ['src/components'],
  },
  mode: 'site',
  navs: [
    null,
    {
      title: 'hooks',
      path: 'http://llixianjie.gitee.io/hooks',
    },
    {
      title: 'github',
      path: 'https://github.com/Iixianjie/m78',
    },
    {
      title: 'm78-core',
      path: 'https://github.com/m78-core',
    },
  ],
  theme: {
    '@c-primary': '#13c2c2',
  },
  exportStatic: {},
  dynamicImport: {},
};
