import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
  sponsorshipRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SponsorshipRequest",
    required: true,
  },
  sponsorProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SponsorProfile",
    required: true,
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  amount: {
    type: Number,
  },
  goods: [{
    type: String
  }],
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["active", "completed", "cancelled"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps:true
}
);

export default mongoose.model("Deal", dealSchema);
