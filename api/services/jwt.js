var jwt = require('jsonwebtoken');

/**
 * Wrapper service to handle JWT actions.
 *
 **/

var accessTokenExpiry = '30d';
var refreshTokenExpiry = '2y'


var getSecretKey = function(){
  var secretKey = 'hush-hush-hush';

  return secretKey;
};

var getOptions = function(type){

  var options;

  if("refresh" === type){

    options = {
      algorithm: 'HS256',
      expiresIn: refreshTokenExpiry
    };

  }else if("access" === type){

    options = {
      algorithm: 'HS256',
      expiresIn: accessTokenExpiry
    };

  }else{
      //TODO: raise an error
    }

  return options;
}

var getPayload = function(type, data, refreshClone){

  var payload = {};

  if(data){
    payload['userId'] = data['userId'];
  }

  if(refreshClone){
    payload['userId'] = refreshClone['userId'];
  }

  if("refresh" === type){

    payload['scope'] = 'refresh';

  }else if("access" === type){

    payload['scope'] = 'access';

  }else{
      //TODO: raise an error
    }

  return payload;

}

module.exports = {

  generateToken: function(type, userId, callback){

    if("access" === type){

      var payload = getPayload("access", {userId: userId});
      var secretKey = getSecretKey();
      var options = getOptions("access");

    }else if("refresh" === type){

      var payload = getPayload("refresh", {userId: userId});
      var secretKey = getSecretKey();
      var options = getOptions("refresh");

    }else{
      //TODO: raise an error
    }


    if(callback){

      return jwt.sign(payload, secretKey, options, function(error, token){

        callback(error, token);

      });

    }else{

      return jwt.sign(payload, secretKey, options);

    }
  },


  refresh: function(decodedToken, callback){

    var payload = getPayload("access", null, decodedToken['payload']);
    var secretKey = getSecretKey();
    var options = getOptions("access");

    if(callback){

      return jwt.sign(payload, secretKey, options, function(error, token){

        callback(error, token);

      });

    }else{

      return jwt.sign(payload, secretKey, options);

    }

  },

  verify: function(type, token, callback){

    if("access" === type){
      var secretKey = getSecretKey();
      var options = getOptions("access");
    }else if("refresh" === type){
      var secretKey = getSecretKey();
      var options = getOptions("refresh");
    }else{
      //TODO: raise an error
    }

    if(callback){

      return jwt.verify(token, secretKey, options, function(error, decoded) {

        callback(error, decoded);

      });

    }else{

      return jwt.verify(token, secretKey, options);

    }

  },


  decode: function(token){

    return jwt.decode(token, {complete: true});

  }


};
