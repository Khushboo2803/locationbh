const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema =new mongoose.Schema({
    phone_number: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    address: [{
        type: String
    }]
})

mongoose.model('user', userSchema);