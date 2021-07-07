const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try {
        let token = ''
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(" ")[1]
        }else{
            token = req.headers.authorization
        }
        const decoded = await jwt.verify(token, process.env.SECRETE_KEY);
        req.tokenData = decoded
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized!',
            status: 401
        })
    }
}

