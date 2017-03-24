var React = require('react')
var api = require('../api.js')
// var render = require('../index.js')

module.exports = App

function App (props) {
  return (
    <div id="stuff">
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
      <img src="https://avatars2.githubusercontent.com/u/23625161?v=3&s=400"></img>
      {reply}
    </div>
  )
}
