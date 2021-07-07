const userService = require("../services/user.services")
const getAllUser = async(req,res)=>{
    try {
        const result =await userService.get({})
        if(result && result.length ===0){
           return res.status(404).json({
                message: "no data found",
                code: 404
            })
        }else{
           return res.status(200).json({
                message:"data get succuss fully",
                status:200,
                data:result
            })
        }
    } catch (error) {   
        return res.status(500).json({
            message: "Internal server error!",
            status: 500
        })
    }
}

module.exports={
    getAllUser
}