const jwt =  require('jsonwebtoken');

const createToken = (data) =>{
    return jwt.sign(
        data, 
        process.env.SECRETE_KEY, 
        { expiresIn: 60 * 60 * 24 }
    )
}



module.exports = {
    generateToken: createToken,
}
