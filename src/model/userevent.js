// const mongoosee=require('../db/mongoose');
const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')

const { default: isEmail } = require('validator/lib/isEmail')
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:{
            validator(val){
                if(!isEmail(val)){
                    throw new Error("Enter valid email")
                }
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

userSchema.statics.findByCredentials=async function(email,password){
        // console.log("login credentials fun called");
        const gotuser=await userEvent.findOne({email:email})
        if(!gotuser){
            throw new Error("Invalid credentials")
        }
       const isMatch=await bcrypt.compare(password,gotuser.password)
        if(!isMatch){
            throw new Error("Invalid credentials")
        }
        return gotuser
}

userSchema.pre('save',async function(next){
    // console.log("pre function called"/);
    if(this.isModified('password')){
        // console.log("password hashed");
        this.password=await bcrypt.hash(this.password,8)
    }
    next()
})

const userEvent= mongoose.model('userevent',userSchema)

module.exports=userEvent;