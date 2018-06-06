
var connectDB = require('../lib/connectDB');

function get(req, res, next) {
  connectDB.query('SELECT * from contacts', function (err, rows, fields) {
    if (err) throw err
    res.send(rows);
  });
}

function getId(req, res, next) {
  // get id param
  var id = req.params.id
  connectDB.query("SELECT * from contacts WHERE id="+id, function (err, result, fields) {
    if (err) throw err
    res.send(result);
  });
}

function create(req, res, next) {
  // get body
  var name = req.body.name;
  var address = req.body.address;
  if (name && address) {
    connectDB.query("INSERT into contacts(name, address) values('"+name+"', '"+address+"')", function (err, result, fields) {
      if (err) throw err
      result = {
        id: result.insertId,
        name: name,
        address: address
      }
      res.send(result);
    });
  } else {
    res.send('fields is required.');
  }
}

function put(req, res, next) {
  // get id param
  var id = req.params.id
  // get body
  var name = req.body.name;
  var address = req.body.address;
  if (id) {
    if (name && address) {
      connectDB.query("UPDATE contacts set name='"+name+"', address='"+address+"' WHERE id="+id, function (err, result, fields) {
        console.log(err)
        if (err) throw err
        result = {
          id: id,
          name: name,
          address: address
        }
        res.send(result);
      });
    } else {
      res.send('fields is required.')
    }
  } else {
    res.send('id is required.');
  }
}

function remove(req, res, next) {
  // get id param
  var id = req.params.id
  connectDB.query("DELETE from contacts WHERE id="+id, function (err, rows, fields) {
    if (err) throw err
    res.send(id);
  });
}

module.exports = {
  get,
  getId,
  create,
  put,
  remove
}