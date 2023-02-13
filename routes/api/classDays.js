const express = require('express');
const router = express.Router();
const classDayCtrl = require('../../controllers/api/classDays')

router.get('/', classDayCtrl.index )
// router.get('/classDays', classDayCtrl.show);
router.post('/', classDayCtrl.create)


module.exports= router;