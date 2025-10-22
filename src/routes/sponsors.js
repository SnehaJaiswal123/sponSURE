const express=require('express')
const router=express.Router()
const Sponsors=require('../controller/sponsors')
const auth=require('../middleware/auth')

router.post('/createsponsor',auth,Sponsors.createsponsor)
router.get('/listevents',auth,Sponsors.listevents)

module.exports=router;