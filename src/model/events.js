const mongoose=require('../connect/db.js')

const EventScehma=mongoose.Schema({
     ename:{
        type:String,
        required:true
     },
     domain:{
        type:String,
        required:true
     },
     purpose:{
        type:String,
        required:true
     },
     date:{
        type:Date,
        required:true
     },
     venue:{
        type:String,
        required:true
     },
     reach:{
        type:Number,
        required:true
     },
     prizepool:{
        type:Number,
        required:true
     }
})

const Events=new mongoose.model('events',EventScehma)

module.exports=Events;