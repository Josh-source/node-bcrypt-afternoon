module.exports = {
    usersOnly: (req, res, next) => {
        if (!req.session.user) {
            return res.status(401).send(`Log In`);
        }
        next();
    },
    adminsOnly: (req,res,next) => {
        if(!req.session.user.isAdmin) {
            return res.status(403).send('not an admin')
        }
        next();
    }
};