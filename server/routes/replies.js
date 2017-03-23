var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getReplies()
    .then(function(result){
      res.json(result)
    })
})

// router.post('/', function (req, res) {
//   db.saveWidget(req.body)
//   res.sendStatus(200)
// })

module.exports = router
