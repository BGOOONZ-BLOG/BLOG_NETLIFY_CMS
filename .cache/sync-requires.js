const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/workspace/BLOG_NETLIFY_CMS/.cache/dev-404-page.js"))),
  "component---src-templates-advanced-js": hot(preferDefault(require("/workspace/BLOG_NETLIFY_CMS/src/templates/advanced.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/workspace/BLOG_NETLIFY_CMS/src/templates/blog.js"))),
  "component---src-templates-docs-js": hot(preferDefault(require("/workspace/BLOG_NETLIFY_CMS/src/templates/docs.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/workspace/BLOG_NETLIFY_CMS/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/workspace/BLOG_NETLIFY_CMS/src/templates/post.js")))
}

