const express = require('express');
const inquiry = require("../Controllers/Inquiry");
const { verifyToken } = require("../Utils/jwtVerify");

const Inquiry = express.Router();
Inquiry.use(verifyToken);


Inquiry.post("/send",inquiry.SaveInquiry);
Inquiry.get("/allInquiry",inquiry.AllInquiry);

module.exports = Inquiry;
