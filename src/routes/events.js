const express=require('express')
const router=express.Router()
const Events=require('../controller/events')

router.post('/createevent',Events.createevent)
router.get('/listsponsors',Events.listSponsor)

module.exports=router