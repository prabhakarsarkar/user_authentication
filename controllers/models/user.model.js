const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        reqired: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dialCode: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    creationTs: {
        type: Date,
        required: true
    },
    updatedOn: {
        type: Date,
        
    }
});

module.exports = mongoose.model('userss', userSchema)


