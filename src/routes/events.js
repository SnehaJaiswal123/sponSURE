const express=require('express')
const router=express.Router()
const Events=require('../controller/events')
const auth=require('../middleware/auth')

router.post('/createevent',auth, Events.createevent)
router.get('/listsponsors',auth, Events.listSponsor)

module.exports=router
