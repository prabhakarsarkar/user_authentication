const userCollection = require("../models/user.model")

const update = (condition,payload)=> userCollection.updateOne(condition,payload)

module.exports = {
    update
}