const express = require('express');
const router = express.Router();
const classDayCtrl = require('../../controllers/api/classDays')

router.get('/', classDayCtrl.index )
router.get('/:id', classDayCtrl.show)
router.post('/classDays', classDayCtrl.create)


module.exports= router;