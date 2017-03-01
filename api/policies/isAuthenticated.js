/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  var token;

  if (req.headers && req.headers.authorization) {

    var parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {

      var scheme = parts[0],
        credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }

    } else {

      return res.badRequest({message: req.__('api-400-auth-format')});

    }
  } else if (req.param('token')) {

    token = req.param('token');
    // We delete the token from param to not mess with blueprints
    delete req.query.token;

  } else {

    return res.badRequest({message: req.__('api-400-auth-no-header')});

  }
  var decodedToken = jwt.decode(token);
  if(!decodedToken){

    return res.forbidden({message: req.__('api-403')});

  }
  if("/api/v1/auth/refresh" == req.url){

    if(decodedToken['payload'] && 'refresh' === decodedToken['payload']['scope']){

      jwt.verify('refresh', token, function (error, token) {

        if (error){

          return res.forbidden({message: req.__('api-403'), error: error});

        }

        req.token = token; // This is the decrypted token or the payload you provided
        req.refreshTokenDecoded = decodedToken;

        next();

      });

    }else{

      return res.badRequest({message: req.__('api-400-rtoken-invalid')});

    }

  }else{

    if(decodedToken['payload'] && 'access' === decodedToken['payload']['scope']){

      jwt.verify('access', token, function (error, token) {

        if (error){

          return res.forbidden({message: req.__('api-403'), error: error});

        }

        req.token = token; // This is the decrypted token or the payload you provided
        req.decodedToken = decodedToken;

        next();

      });

    }else{

      return res.badRequest({message: req.__('api-400-atoken-invalid')});

    }

  }

};
