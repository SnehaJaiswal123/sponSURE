const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true
  },
  password: { 
    type: String, 
    required: true
  },
  role: { 
    type: String, 
    enum: ["sponsor", "organizer"], 
    required: true 
  }
},
{
    timestamps:true
}
);

userSchema.pre('save',function(next){
  if(this.isModified('password')){
    this.password = bcrypt.hash(this.password,10)
  }
  next()
})

userSchema.methods.comparePassword = async function (password) {
  const isPassCorrect = await bcrypt.compare(password, this.password)
  return isPassCorrect
}

userSchema.methods.generateJwtToken = async function (){
  return jwt.sign(
    {
      id:this._id
    },
    process.env.jwt_secret,
    {
      expiresIn:"1d"
    }
  )
}

const User = mongoose.model("User", userSchema);

module.exports = User