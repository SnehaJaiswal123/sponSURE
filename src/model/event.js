import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
{
  organizer: { 
   type: mongoose.Schema.Types.ObjectId, 
   ref: "User", 
   required: true
  },
  title: { 
   type: String, 
   required: true
  },
  description: { 
   type: String 
  },
  category: { 
   type: String ,
   required:true
  },
  location: { 
   type: String,
   required:true
  },
  date: { 
   type: Date, 
   required: true 
  },
  budgetRequired: { 
   type: Number 
  },
  sponsorshipStatus: { 
    type: String, 
    enum: ["open", "partially-sponsored", "fully-sponsored"], 
    default: "open" 
  }
},
{
   timestamps:true
});

export default mongoose.model("Event", eventSchema);
