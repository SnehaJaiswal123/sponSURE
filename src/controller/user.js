const user=require('../model/user')

module.exports.signup=async(req,res)=>{   
    try{
       const newuser=await user(req.body)
       const token=await newuser.genauthtoken()
    //    newuser.save();
        res.send({user:newuser,token:token})

    } 
    catch(e){
        console.log(e);
        res.status(400).send(e)
    }   
}

module.exports.login=async(req,res)=>{
    try{
        const userExist=await user.findByCredentials(req.body.email,req.body.password)
        const token=await userExist.genauthtoken()
        if(!userExist){
            console.log("Invalid Credentials");
            return res.send("Invalid credentials")
        }
        res.send({user:userExist,token:token})
    }
    catch(e){
        console.log(e);
        res.status(400).send(e)
    }
}
