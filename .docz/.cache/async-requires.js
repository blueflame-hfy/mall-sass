// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---code-of-conduct-md": () => import("./../../CODE_OF_CONDUCT.md" /* webpackChunkName: "component---code-of-conduct-md" */),
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

