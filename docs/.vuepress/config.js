const appConfig = require('../../src/app.config');
const children = require('./component-list');

module.exports = {
  title: `${appConfig.title} Docs`,
  themeConfig: {
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    sidebar: [
      ['/', 'Introduction'],
      {
        title: 'Components',
        children,
      },
    ],
  },
};
