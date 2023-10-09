const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
});

const availabilitySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  slots: [slotSchema],
});

module.exports = mongoose.model("Availability", availabilitySchema);
