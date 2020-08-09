var express = require('express');
var router = express.Router();
var homeCtrl=require('./../controllers/homeCtrl')

router.get('/',homeCtrl.showHome)
router.get('/portfolio',homeCtrl.showPortfolio)
module.exports = router;
