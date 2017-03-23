import request from 'superagent'

var repliesUrl = 'http://localhost:3000/replies'

module.exports = {
  getReplies: getReplies
  // appendWidget: appendWidget
}

function getReplies (callback) {
  request
    .get(repliesUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

// function appendWidget (widget, callback) {
//   request
//     .post(widgetUrl)
//     .send(widget)
//     .end(function (err, res) {
//       if (err) {
//         callback(err)
//       } else {
//         callback()
//       }
//     })
// }
