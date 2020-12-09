const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mac/Developer/ProjectAMPZ/ampzWebsite/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mac/Developer/ProjectAMPZ/ampzWebsite/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/Users/mac/Developer/ProjectAMPZ/ampzWebsite/src/pages/about-us.js"))),
  "component---src-pages-get-started-js": hot(preferDefault(require("/Users/mac/Developer/ProjectAMPZ/ampzWebsite/src/pages/get-started.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mac/Developer/ProjectAMPZ/ampzWebsite/src/pages/index.js"))),
  "component---src-pages-products-js": hot(preferDefault(require("/Users/mac/Developer/ProjectAMPZ/ampzWebsite/src/pages/products.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/mac/Developer/ProjectAMPZ/ampzWebsite/src/pages/using-typescript.tsx")))
}

