const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/.cache/dev-404-page.js"))),
  "component---code-of-conduct-md": hot(preferDefault(require("/Users/hufayan/Documents/workspace/personal/mall-sass/CODE_OF_CONDUCT.md"))),
  "component---readme-md": hot(preferDefault(require("/Users/hufayan/Documents/workspace/personal/mall-sass/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hufayan/Documents/workspace/personal/mall-sass/.docz/src/pages/404.js")))
}

