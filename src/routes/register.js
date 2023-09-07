const express = require('express');
const router = express.Router();

const { newRegister } = require('../controller/rigister')

router.get('/get', newRegister);

module.exports = router
