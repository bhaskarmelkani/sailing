var options = {
  host: '127.0.0.1',
  port: 6379

};
var redis = require("redis");

var client = redis.createClient(options);

module.exports = client; 