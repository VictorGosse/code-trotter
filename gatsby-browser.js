require("./src/styles/global.css")
require("prismjs/themes/prism-tomorrow.css")

exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}

const checkHash = location => {
  let { hash } = location
  if (hash) {
    var element = document.querySelector(hash)

    element.scrollIntoView()
  }
}
