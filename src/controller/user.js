const User = require('../model/user');
const Organizer = require('../model/organiser');

const register = async (req,res) =>{
    try {
        const {userName, email, password, role} = req.body;

        if(!userName || !email || !password || !role){
            return res.status(404).json({
                success:false,
                message:"All fields are required"
            })
        }

        const userExist = await User.findOne({email})
        
        if(userExist){
           return res.status(409).json({
                success:false,
                message:"user with this email exist"
            }) 
        }

        if(role==='organizer'){
            await Organizer.create({email})
        }

        const newUser = await User.create(req.body);

        return res.status(201).json({
            success:true,
            message:"User Created"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error in registering user",
            error:error.message
        })
    }
}

const login = async (req,res) =>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(404).json({
                success:false,
                message:"All fields are required"
            })
        }

        const user = await User.findOne({email})
        
        if(!user){
           return res.status(409).json({
                success:false,
                message:"user with this email doesn't exist"
            }) 
        }

        const isPassCorrect = await user.comparePassword(password)

        if(!isPassCorrect){
           return res.status(201).json({
                success:false,
                message:"Incorrect Password"
            }) 
        }

        const token = await user.generateJwtToken();

        const options={
            httpOnly:true,
            secure:true
        }

        return res
        .status(200)
        .cookie('token',token,options)
        .json({
            success:true,
            message:"LoggedIn successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error in logging in user",
            error:error.message
        })
    }
}

const logout = async (req,res) =>{
  try{
    const options={
      httpOnly:true,
      secure:true
    }
    
    return res
    .status(200)
    .clearCookie("token",options)
    .json({
      success:true,
      message:"Logout Successfully"
    })
  }
  catch(err){
    console.log("Error while logggin out",err);
    return res.status(500).json({
      success:false,
      message:err.message
    })
  }
}

module.exports={
    register,
    login,
    logout
}