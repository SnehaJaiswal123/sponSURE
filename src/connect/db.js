const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://snehajais270703:mongo123@cluster0.qufvpho.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connected successfully");
})
.catch((e)=>{
    console.log(e);
})

module.exports=mongoose