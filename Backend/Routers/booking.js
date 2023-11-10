const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/booking');
const { verifyToken } = require("../Utils/jwtVerify");
router.use(verifyToken);

// POST: Create a new booking
router.post('/create-booking', bookingController.createBooking);


module.exports = router;
