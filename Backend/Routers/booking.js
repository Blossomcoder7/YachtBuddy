const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/booking');
const { verifyToken } = require("../Utils/jwtVerify");
router.use(verifyToken);

// POST: Create a new booking
router.post('/create-booking', bookingController.createBooking);

router.get('/all-booking', bookingController.allBooking);

router.get('/owner-booking', bookingController.ownerBooking);


module.exports = router;
