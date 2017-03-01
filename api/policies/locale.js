module.exports = function(req, res, next) {

  //Set locale from languagePreference set in session.
  //req.setLocale(req.session.languagePreference);
  //TODO: Add code to accept other get parama to detect the lang
  next();
};
