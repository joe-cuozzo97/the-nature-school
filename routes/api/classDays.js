const express = require('express');
const router = express.Router();
const classDayCtrl = require('../../../controllers/api/classDays')

router.get('/', classDayCtrl.index )
router.get('/:id', classDayCtrl.show)
router.post('/', classDayCtrl.create)
router.delete("/:id", classDayCtrl.delete)
router.put("/:id", classDayCtrl.edit )
module.exports= router;