const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name.']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email']
    },
    phoneNo: {
        type: Number,
        required: [true, 'Please provide a your number']
    },
    password: {
        type: String,
        required: [true, 'Please enter a strong password']
    }
})

const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;