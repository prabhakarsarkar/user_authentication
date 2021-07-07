const Joi = require("joi")
const bcrypt = require("bcrypt")
const signupService = require("../services/signup.services")
const common = require("../middlewares/common")
const signin = async (req, res) => {
    console.log(req.body);
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
                message: "Incorrect usernamne or password!",
                code: 404,
            });
        }

        const plainPass = await bcrypt.compare(
            schemaValidator.password,
            result.password
        );
        if (!plainPass) {
            return res.status(404).send({
                message: "Incorrect usernamne or password!",
                code: 404,
            });
        }

        result = result._doc;
        const tokenPayload = {
            userId: result._id,
            email:result.email,
            password:result.password
        };
        const token = await common.generateToken(tokenPayload);

        const response = {
            token: token,
            userId: result._id,
            firstName:result.firstName,
            lastName:result.lastName,
            email:result.email,
            gender:result.gender,
            dateOfBirth:result.dateOfBirth,
            phoneNumber:result.phoneNumber,
            dialCode:result.dialCode,
            country:result.country,
            state:result.state,
            city:result.city

        };
        return res.status(200).json({
            message: "success",
            data: response,
            status: 200,
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            status: 500,
        });
    }
};


module.exports = {
    signin
}