var express = require('express');
var router = express.Router();

var connectDB = require('../lib/connectDB');

/* GET users listing. */
router.get('/', function(req, res, next) {
  connectDB.connect();
  connectDB.query('SELECT * from contacts', function (err, rows, fields) {
    if (err) throw err
    res.send(rows);
  })
  connectDB.end();
});

module.exports = router;
