const events=require('../model/events')
const sponsors=require('../model/sponsors')

module.exports.createevent=async(req,res)=>{
    try{
        const myevent= new events(req.body)
        await myevent.save()
        console.log("event created");
        res.send(myevent)
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

