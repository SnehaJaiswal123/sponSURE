const user=require('../model/userevent')

module.exports.signup=async(req,res)=>{   
    try{
       const myuser=await user(req.body)
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
            console.log("Invalid Credentials");
            return res.send("Invalid credentials")
        }
        res.status(200).send(userli)
    }
    catch(e){
        console.log(e);
        res.status(400).send(e)
    }
}
