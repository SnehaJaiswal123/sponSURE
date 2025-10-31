const express = require('express');
const router = express.Router();
const {updateProfile, getProfile, getEvents} = require('../controller/organiser');

router.route('/profile')
.patch(updateProfile)
.get(getProfile)

router.get('/events',getEvents)

module.exports = router