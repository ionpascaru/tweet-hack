module.exports.isAuthenticated = (req, res, next) => {
  if (req.session.user) {
      next()
  } else {
    req.session.genericError = "Need authentication"
    res.redirect("/login")
  }
}

module.exports.isNotAuthenticated = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/login")
  } else {
      next()
  }
  
}
