const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        maxLength : 30
    },
    email :{
        type : String,
        required: true,
        unique : true
    },
    password : {
        type : String,
        minlength : 6, 
        select : false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

// Returning JWT
userSchema.methods.getJwtToken = function(){
   
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

// generate password reset token
userSchema.methods.getResetPasswordToken = function(){
    // generate token
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    // hash and set to resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    // set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000   // 30 minutes

    return resetToken;
}

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;