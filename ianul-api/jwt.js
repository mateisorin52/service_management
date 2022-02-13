const expressJwt = require('express-jwt');
const config = require('./config');
const users = require('./services/users');

module.exports = jwt;

function jwt() {
    const secret = config.secret
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/user/authenticate',
            '/register',
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await users.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};