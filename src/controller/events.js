const Event = require('../model/event');

const createEvent = async (req,res) => {
  try {
    const {title, description, category, location, date, budgetRequired, sponsorshipStatus} = req.body;

    if(!title || !category || !location || !date || !sponsorshipStatus){
      return res.status(401).json({
        success:false,
        message:"Some required fields are empty"
      })
    }

    const newEvent = await Event.create({
      organiser:req.user?._id,
      title, 
      description, 
      category, 
      location, 
      date, 
      budgetRequired, 
      sponsorshipStatus
    })

    return res.status(201).json({
        success:true,
        message:"Event Created Successfully",
        newEvent
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in creating event",
      error:error.message
    })
  }
}

const updateEvent = async (req,res) => {
  try {
    const eventId = req.params.eventId;

    if(!eventId || eventId.trim() == ""){
      return res.status(401).json({
        success:false,
        message:"Event Id is required"
      })
    }

    const {title, description, category, location, date, budgetRequired, sponsorshipStatus} = req.body;

    if(!title || !category || !location || !date || !sponsorshipStatus){
      return res.status(401).json({
        success:false,
        message:"Some required fields are empty"
      })
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        title, 
        description, 
        category, 
        location, 
        date, 
        budgetRequired, 
        sponsorshipStatus
      },
      {
        new:true
      }
    )

    return res.status(201).json({
        success:true,
        message:"Event updated Successfully",
        updatedEvent
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in updating event",
      error:error.message
    })
  }
}

const deleteEvent = async (req,res) => {
  try {
    const eventId = req.params.eventId;

    if(!eventId || eventId.trim() == ""){
      return res.status(401).json({
        success:false,
        message:"Event Id is required"
      })
    }

    const deletedEvent = await Event.findByIdAndDelete(eventId)

    return res.status(200).json({
        success:true,
        message:"Event deleted Successfully",
        deletedEvent
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in deleting event",
      error:error.message
    })
  }
}

const getEvents = async (req,res) => {
  try {
    const events = await Event.find();

    return res.status(200).json({
      success:true,
      message:"All events retrieve",
      events
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in retrieving events"
    })
  }
}

const getEventDetails = async (req,res) => {
  try {
    const eventId = req.params.eventId;

    if(!eventId || eventId.trim() == ""){
      return res.status(401).json({
        success:false,
        message:"Event Id is required"
      })
    }

    if(!eventId){
      return res.status(401).json({
        success:false,
        message:"Event Id is required"
      })
    }

    const event = await Event.findById(eventId);

    return res.status(200).json({
      success:true,
      message:"Event details retrieved",
      event
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in retrieving event"
    })
  }
}

const getEventSponsors = async () => {
  
}

module.export = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getEventDetails,
  getEventSponsors
}