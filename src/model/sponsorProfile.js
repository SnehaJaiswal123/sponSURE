import mongoose from "mongoose";

const sponsorProfileSchema = new mongoose.Schema(
{
  userId: { 
   type: mongoose.Schema.Types.ObjectId, 
   ref: "User", 
   required: true 
  },
  companyName: { 
   type: String, 
   required: true 
  },
  website: { 
   type: String 
  },
  industry: { 
   type: String 
  },
  minAmount: { 
   type: Number,
   required:true
  },
  maxAmount: { 
   type: Number,
   required:true
  },
  preferredCategories: [{ 
   type: String 
  }],
  pastSponsoredEvents: { 
   type: Number, 
   default: 0 
  },
  description: { 
   type: String 
  }
},
{
   timestamps:true
}
);

export default mongoose.model("SponsorProfile", sponsorProfileSchema);
