var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getReplies: getReplies
}

function getReplies () {
  return knex('replies').select()
}

// function saveReplies (widget) {
//   // widget.id = widgets.length + 1
//   // widgets.push(widget)
// }
