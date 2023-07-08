const express=require('express')
const multer=require('multer')
const router=express.Router()
const Sponsors=require('../controller/sponsors')

router.post('/createsponsor',Sponsors.createsponsor)

router.get('/listevents',Sponsors.listevents)
module.exports=router