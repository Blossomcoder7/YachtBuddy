const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  boatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boat',
  },
  email:{
    type:String,
  },
  date: [{
    startDate: Date,
    endDate: Date,
    key: String
  }],
  username: {
    type: String,
    required: true,
  },
  duration: {
    type: [String],
    required: "true",
  },
  startTime: {
    type: [String],
    required: "true",
  },
  passenger: {
    type: Number,
    required: "true"
  },


  createdAt: { type: Date, default: Date.now },
});

const Inquiry = mongoose.model("Inquiry", messageSchema);
module.exports = Inquiry;
