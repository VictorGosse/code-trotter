require("prismjs/themes/prism-tomorrow.css")
require("./src/styles/global.css")

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
