var React = require('react')
var api = require('../api.js')

module.exports = App

function App (props) {
  return (
    <div>
      <h1>Hi</h1>
      <form onSubmit={getReplies}>
        <p><input type='text'></input></p>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

}

function getReplies(e) {
  e.preventDefault()
  api.getReplies(callback)
}

function callback(err, res) {
  console.log(res)
}
