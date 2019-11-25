const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 2,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }

});

userSchema.methods.setPassword = async function(password) {
    let saltRound = 10;
    try {
        let a = await bcrypt.genSalt(saltRound);
        return await bcrypt.hash(password, a);
    } catch (e) {
        return e;
    }
};


const Model = mongoose.model('UserSchema', userSchema);
module.exports = Model;