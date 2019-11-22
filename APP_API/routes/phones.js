const express = require('express');
const router = express.Router();
const ctrlPhone = require('../controllers/phone');

// Phones
router
.route('/phone')
.get(ctrlPhone.getPhones)
.post(ctrlPhone.createPhone);

router
.route('/phones/:phoneid')
.get(ctrlPhone.getSinglePhone)
.put(ctrlPhone.updatePhone)
.delete(ctrlPhone.deletePhone);

module.exports = router;
