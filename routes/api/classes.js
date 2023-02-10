const express = require('express');
const router = express.Router();
const classCtrl = require('../../controllers/api/classes')

router.get('/classes', classCtrl.index )