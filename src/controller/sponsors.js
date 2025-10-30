const Sponsor = require('../model/sponsorProfile');

const createSponsor = async (req,res) => {
  try {
    const {companyName, website, industry, description, minAmount, maxAmount, preferredCategories} = req.body;

    if(!companyName || !industry, !minAmount || !maxAmount || !preferredCategories){
      return res.status(401).json({
        success:false,
        message:"Some required fields are empty"
      })
    }

    const newSponsor = await Sponsor.create({
      userId:req.user?._id,
      companyName, 
      description, 
      website, 
      industry, 
      minAmount, 
      maxAmount, 
      preferredCategories
    })

    return res.status(201).json({
        success:true,
        message:"Sponsor Created Successfully",
        newSponsor
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in creating sponsor",
      error:error.message
    })
  }
}

const updateSponsor = async (req,res) => {
  try {
    const sponsorId = req.params.sponsorId;

    if(!sponsorId || sponsorId.trim() == ""){
      return res.status(401).json({
        success:false,
        message:"Sponsor Id is required"
      })
    }

    const {companyName, website, industry, description, minAmount, maxAmount, preferredCategories} = req.body;

    if(companyName=="" || industry=="" || minAmount=="" || maxAmount=="" || preferredCategories==""){
      return res.status(401).json({
        success:false,
        message:"Some required fields are empty"
      })
    }

    const updatedSponsor = await Sponsor.findByIdAndUpdate(
      sponsorId,
      {
        companyName, 
        website, 
        industry, 
        description, 
        minAmount, 
        maxAmount, 
        preferredCategories
      },
      {
        new:true
      }
    )

    return res.status(201).json({
        success:true,
        message:"Sponsor updated Successfully",
        updatedSponsor
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in updating sponsor",
      error:error.message
    })
  }
}

const deleteSponsor = async (req,res) => {
  try {
    const sponsorId = req.params.sponsorId;

    if(!sponsorId || sponsorId.trim() == ""){
      return res.status(401).json({
        success:false,
        message:"Sponsor Id is required"
      })
    }

    const deletedSponsor = await Event.findByIdAndDelete(sponsorId)

    return res.status(200).json({
        success:true,
        message:"Sponsor deleted Successfully",
        deletedSponsor
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in deleting sponsor",
      error:error.message
    })
  }
}

const getSponsors = async (req,res) => {
  try {
    const sponsors = await Sponsor.find();

    return res.status(200).json({
      success:true,
      message:"All sponsors retrieve",
      sponsors
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in retrieving sponsors"
    })
  }
}

const getSponsorDetails = async (req,res) => {
  try {
    const sponsodId = req.params.sponsodId;

    if(!sponsodId || sponsodId.trim() == ""){
      return res.status(401).json({
        success:false,
        message:"Sponsor Id is required"
      })
    }

    const sponsor = await Sponsor.findById(sponsodId);

    return res.status(200).json({
      success:true,
      message:"Sponsor details retrieved",
      sponsor
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Error in retrieving sponsor"
    })
  }
}

module.exports = {
  createSponsor,
  updateSponsor,
  deleteSponsor,
  getSponsors,
  getSponsorDetails
}