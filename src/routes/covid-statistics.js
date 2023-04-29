const router = require('express').Router();
const {
    getTotalRecovered, 
    getTotalActive, 
    getTotalDeath, 
    gethotspotStates, 
    gethealthyStates
} = require('../controllers/covid-statistics');

router.get('/totalRecovered', getTotalRecovered);
router.get('/totalActive', getTotalActive);
router.get('/totalDeath', getTotalDeath);
router.get('/hotspotStates', gethotspotStates);
router.get('/healthyStates', gethealthyStates);

module.exports = router;