const user=require('../model/usersponsor')

module.exports.signup=async(req,res)=>{   
    try{
       const myuser=new user(req.body)
       if(myuser.password!=myuser.cpassword){
         return res.status(400).send("password doesn't match")
       }
       await myuser.save();
        res.status(201).send(myuser)

    } 
    catch(e){
        console.log(e);
        res.status(400).send(e)
    }   
}

module.exports.login=async(req,res)=>{
    try{
        const userli=await user.findByCredentials(req.body.email,req.body.password)
        if(!userli){
            return res.send("Invalid credentials")
        }
        res.status(200).send(userli)
    }
    catch(e){
        console.log(e);
        res.status(400).send(e)
    }
}
