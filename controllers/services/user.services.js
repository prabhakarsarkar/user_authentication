const userCollection = require("../models/user.model")

const get = (condition)=>userCollection.find(condition)


module.exports={
    get
}