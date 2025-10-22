const events=require('../model/events')
const sponsors=require('../model/sponsors')
const User=require('../model/user')

module.exports.createevent=async(req,res)=>{
    try{
        const newEvent=new events({
            ...req.body,
            owner:req.user._id
        })
        await newEvent.save()
        await newEvent.populate('owner')
        console.log(newEvent.owner);
        res.send(newEvent)
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
}

module.exports.listSponsor=async(req,res)=>{
    try{
       const allsponsor=await sponsors.find()
       console.log(allsponsor);
       res.send(allsponsor);
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
}

