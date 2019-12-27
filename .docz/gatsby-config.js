const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Mall Sass',
    description:
      'an example sass module of component library built with React!',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Mall Sass',
        description:
          'an example sass module of component library built with React!',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/hufayan/Documents/workspace/personal/mall-sass',
          templates:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/node_modules/docz-core/dist/templates',
          docz: '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz',
          cache:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/.cache',
          app:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/app',
          appPackageJson:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/package.json',
          gatsbyConfig:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/gatsby-config.js',
          gatsbyBrowser:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/gatsby-browser.js',
          gatsbyNode:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/gatsby-node.js',
          gatsbySSR:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/gatsby-ssr.js',
          importsJs:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/app/imports.js',
          rootJs:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/app/root.jsx',
          indexJs:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/app/index.jsx',
          indexHtml:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/app/index.html',
          db:
            '/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
