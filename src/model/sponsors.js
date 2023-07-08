const mongoose=require('../connect/db.js')

const Sponsor=mongoose.Schema({
     cname:{
        type:String,
        required:true
     },
     info:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     minFund:{
        type:Number,
        required:true,
     },
     evaluation:{
        type:Number,
        required:true
     },
     eventsponsored:{
        type:Number,
        required:true
     },
     website:{
      type:String,
      required:true
     },
     linkedin:{
      type:String,
      required:true
     },
     contact:{
      type:String,
      required:true
     }
})

const Sponsors=new mongoose.model('sponsors',Sponsor)

module.exports=Sponsors;