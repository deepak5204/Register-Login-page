const express = require('express');
const router = express.Router();

const { newRegister } = require('../controller/rigister')

router.post('/', newRegister);

module.exports = router
