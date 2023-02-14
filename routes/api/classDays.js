const express = require('express');
const router = express.Router();
const classDayCtrl = require('../../controllers/api/classDays')

router.get('/', classDayCtrl.index )
router.get('/classDays/:id', classDayCtrl.show)
// router.get('/classDays', classDayCtrl.show);
router.post('/classDays', classDayCtrl.create)


module.exports= router;