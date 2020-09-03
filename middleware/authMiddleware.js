function checkAuth(req, res, next) {
    res.locals.isSignedIn = req.session.isSignedIn
    next()
}

function requireAuth(req, res, next) {
    if(!req.session.isSignedIn) {
        return res.redirect('/auth/sign-in')
    }
    next()
}

module.exports = {
    checkAuth,
    requireAuth
}