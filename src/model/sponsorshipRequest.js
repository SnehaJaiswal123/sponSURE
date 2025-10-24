import mongoose from "mongoose";

const sponsorshipRequestSchema = new mongoose.Schema(
{
  sponsorId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  eventId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Event", 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["pending", "accepted", "rejected"], 
    default: "pending" 
  },
  initiatedBy: { 
    type: String, 
    enum: ["sponsor", "organizer"], 
    required: true 
  }
},
{
  timestamps:true
}
);

export default mongoose.model("SponsorshipRequest", sponsorshipRequestSchema);
