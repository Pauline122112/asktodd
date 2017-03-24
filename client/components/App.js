var React = require('react')
var api = require('../api.js')
// var render = require('../index.js')

module.exports = App

function App (props) {
  return (
    <div>
      <h1>Ask Todd</h1>
      <form onSubmit={getReplies}>
        <p><input type='text'></input></p>
        <button type="submit">Ask him</button>
      </form>
      <ShowReply render={props.render}/>
    </div>
  )
}

var state = {

}

function getReplies(e) {
  e.preventDefault()
  api.getReplies(ShowReply)
}

function ShowReply(err, res) {
  var reply = res[0]
  return (
    <div>
      {reply}
    </div>
  )
}
