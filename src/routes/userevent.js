const express=require('express');
const router=express.Router();
const user=require('../controller/userEvent')

router.post('/eventsignup',user.signup)
router.post('/eventlogin',user.login)

module.exports=router