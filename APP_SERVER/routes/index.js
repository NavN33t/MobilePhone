
const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAbout = require('../controllers/about');
const ctrlBook = require('../controllers/mobile');
const ctrlDisplay = require('../controllers/display');



/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about',ctrlAbout.about);
router.get('/mobile',ctrlBook.mobile);
router.get('/display', ctrlDisplay.display);

module.exports = router;
