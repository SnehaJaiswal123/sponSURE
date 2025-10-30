const express = require('express');
const router = express.Router();
const {
        createEvent,
        updateEvent,
        deleteEvent,
        getEvents,
        getEventDetails,
        getEventSponsors
      } = require('../controller/events');
const auth = require('../middleware/auth')

router.post('/createEvent', auth, createEvent)

router.route('/:eventId')
.patch(auth, updateEvent)
.delete(auth, deleteEvent)

router.get('/getEvents',getEvents)
router.get('/getEvents/:eventId', auth, getEventDetails)
router.get('/getEvents/:eventId', auth, getEventSponsors)

module.exports = router