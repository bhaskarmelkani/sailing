/**
 * TODO: Add more documentation.
 *
 * Create a custom database connection instead of using models.
 *
 * */


var mysql      = require('mysql');
var connections = sails.config.connections;

var db = mysql.createConnection({
  host     : connections.mysql['host'],
  user     : connections.mysql['user'],
  password : connections.mysql['password'],
  database : connections.mysql['database']
});

module.exports = db;
