const multer  = require('multer')
const sponsors=require('../model/sponsors')
const events=require('../model/events')

module.exports.listevents=async(req,res)=>{
     try{
        const allevent=await events.find()
        res.send(allevent)
        console.log(allevent);
     }
     catch(e){
        console.log(e);
        res.status(400).send(e)
     }
}

module.exports.createsponsor=async(req,res)=>{
    try{
        const mysponsor= new sponsors(req.body)
        await mysponsor.save()
        console.log("created");
        res.send(mysponsor)
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
}

module.exports.errorhandler=async(error,req,res,next)=>{
    res.status(400).send({
        error:error.message
    })
}


