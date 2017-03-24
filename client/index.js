import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

module.exports = {
  render: render
}

var target = document.getElementById('main')
function render () {
  var view = App(render)
  ReactDOM.render(view, target)
}

render()


// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('main')
//   )
// })
