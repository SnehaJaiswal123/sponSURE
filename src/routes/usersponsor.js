const express=require('express');
const router=express.Router();
const user=require('../controller/userSponsor')

router.post('/sponsorsignup',user.signup)
router.post('/sponsorlogin',user.login)

module.exports=router