const express = require('express');
const boatController = require('../Controllers/Boat');
const { verifyToken } = require("../Utils/jwtVerify");

const Boat = express.Router();

Boat.get('/allBoat', boatController.allBoat);
Boat.get('/ownerBoat',verifyToken, boatController.ownerBoat);
Boat.get('/:category', boatController.categriseBoat);
Boat.get('/:id', boatController.singleBoat);

module.exports = Boat;
