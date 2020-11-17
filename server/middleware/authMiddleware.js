function checkAuth(req, res, next) {
    res.locals.isSignedIn = req.session.isSignedIn
    res.locals.user = req.session.user
    next()
}

function requireAuth(req, res, next) {
    if(!req.session.isSignedIn) {
        return res.status(401).json({
            "error": {
                "description": "Forbidden. Register or sign in"
            }
        })
    }
    next()
}

module.exports = {
    checkAuth,
    requireAuth
}