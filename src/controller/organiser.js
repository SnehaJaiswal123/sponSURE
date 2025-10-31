const Organizer = require('../model/organiser');

const updateProfile = async (req,res) => {
  try {
    const {organizationName} = req.body;

    const updatedOrg = await Organizer.findByOneAndUpadte(
      {
        userId:req.user._id
      },
      {
        organizationName
      },
      {
        new:true
      }
    );

    if(!updatedOrg){
      return res.status(404).json({
        success:false,
        message:"Correspoding Organisation not found"
      })
    }

    return res.status(201).json({
      success:true,
      message:"Organisation updated successfully"
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in updating organisation",
      error:error.message
    })
  }
}

const getProfile = async (req,res) => {
  try {
    const userId = req.user._id;

    const profile = await Organizer.findOne({userId});

    if(!profile){
      return res.status(404).json({
        success:false,
        message:"Organisation profile not found"
      })
    }

    return res.status(200).json({
      success:true,
      message:"Organisation retrieved successfully",
      profile
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in finding org profile",
      error:error.message
    })
  }
}

const getEvents = async (req,res) => {
  try {
    const userId = req.user._id;

    const populatedEvents = await User.findOne({userId}).populate('posts');

    const events= populatedEvents.events;

    return res.status(200).json({
      success:true,
      message:"Events retrieved successfully",
      events
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in retrieving events",
      error:error.message
    })
  }
}

module.exports = {
  updateProfile,
  getProfile,
  getEvents
}
