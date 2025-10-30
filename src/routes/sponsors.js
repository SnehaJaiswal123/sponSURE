const express = require('express');
const router = express.Router();
const {
        createSponsor,
        updateSponsor,
        deleteSponsor,
        getSponsors,
        getSponsorDetails
      } = require('../controller/sponsors');

router.post('/createSponsor',createSponsor)

router.route('/:sponsorId')
.patch(updateSponsor)
.delete(deleteSponsor)

router.get('/getSponsors',getSponsors)
router.get('/getSponsors/:sponsodId',getSponsorDetails)

module.exports = router