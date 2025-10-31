import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    organizationName: { 
      type: String, 
      required: true 
    },
    email:{
      type:String,
      required:true
    },
    events:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Event'
    }],
    website: String,
    description: String,
 },
 {
  timestamps:true
 }
);

const Organizer =  mongoose.model("Organizer", organizerSchema);

export default Organizer