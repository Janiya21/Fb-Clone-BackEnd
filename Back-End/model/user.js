const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
    },
    sureName: {
        type:String,
        required:true,
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("user",User);