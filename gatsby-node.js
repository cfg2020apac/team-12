const path = require("path")

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function (
        context,
        request,
        callback
      ) {
        const regex = /^@?firebase(\/(.+))?/
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, "umd " + request)
        }
        callback()
      }),
    })
  }
}

// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage } = actions
//   // Make the front page match everything client side.
//   // Normally your paths should be a bit more judicious.
//   if (page.path === `/`) {
//     page.matchPath = `/*`
//     createPage(page)
//   }
// }
