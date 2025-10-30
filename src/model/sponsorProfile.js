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
  description: { 
   type: String 
  }
},
{
   timestamps:true
}
);

const SponsorProfile = mongoose.model("SponsorProfile", sponsorProfileSchema);

export default SponsorProfile
