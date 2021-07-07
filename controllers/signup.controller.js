const signupService = require("../services/signup.services")
const Joi = require("joi")
const bcrypt = require("bcrypt")
const saltRounds =10;
const craeteUser = async (req, res) => {
    console.log(req.body);
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(20).required(),
        lastName: Joi.string().min(3).max(20).allow("", null),
        gender: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        dateOfBirth: Joi.string().required(),
        phoneNumber:Joi.string().length(10).required(),
        dialCode: Joi.string().allow(null, ""),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
    })

    let schemaValidator = userSchema.validate(req.body);
    if (schemaValidator.error) {
        return res.status(400).json({
            message: "Invalid payload",
            error: schemaValidator.error.message,
            status: 400
        })
    } else {
        userPayload = schemaValidator.value
    }
    try {
       
        const condition = {
            email: userPayload.email
        }
        const existingUser = await signupService.findOne(condition)
        console.log(existingUser);
        if (existingUser && existingUser.length !==0) {
            return res.status(409).json({
                message: "user is already exists",
                status: 409
            })
        } else {
            const encryptedPass = await bcrypt.hash(userPayload.password, saltRounds);
            userPayload['password'] = encryptedPass;
            const payload = {
                ...userPayload,
                creationTs: Date.now()
            }
            console.log(payload);
            const result = await signupService.post(payload)
            console.log(result,"gggggggggggggg");
            return res.status(200).json({
                message:"user create seccuss fully",
                data:result,
                status:200
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,",error,
            status: 500,

        })
    }

}

module.exports = {
    craeteUser,
   
    
}