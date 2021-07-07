const Joi = require("joi")
const bcrypt = require("bcrypt")
const saltRounds =10;
const signupService = require('../services/signup.services')
const forgetPasswordService = require('../services/Forgot_password.services')
const CheckEmailForForgetPassword = async(req,res) => {

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),

    });
    let schemaValidator = schema.validate(req.body);
    if (schemaValidator.error) {
        return res.status(400).json({
            message: schemaValidator.error.message || "Bad Request!",
            code: 400,
        });
    } else {
        schemaValidator = schemaValidator.value;
    }
    const conditions = {
        email: schemaValidator.email,
    };
    

    try {
        let result = await signupService.findOne(conditions);
        console.log(result, "jjjjjjjjjjjjjjjj");
        if (!result) {
            return res.status(404).send({
                message: "Incorrect email please enter correct Email ",
                code: 404,
            });
        } else {
            const encryptedPass = await bcrypt.hash(schemaValidator.password, saltRounds);
            const payload = {
               password:encryptedPass
            }
            let result = await forgetPasswordService.update(conditions,payload);
            return res.status(200).json({
                message: 'forgot password success full',
                status: 200,
                data:{
                    NewPassword:schemaValidator.password
                }
                
                
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",error,
            status: 500,
        });
    }




}

module.exports ={
    CheckEmailForForgetPassword
    
}