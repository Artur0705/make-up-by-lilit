const Availability = require("../models/availabilityModel");
const asyncHandler = require("express-async-handler");

exports.addAvailability = asyncHandler(async (req, res) => {
  try {
    const availability = new Availability(req.body);
    await availability.save();
    res.status(201).send(availability);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.getAvailability = asyncHandler(async (req, res) => {
  try {
    const availability = await Availability.find();
    res.status(200).send(availability);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.updateAvailability = asyncHandler(async (req, res) => {
  try {
    const availability = await Availability.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!availability) {
      return res.status(404).send();
    }
    res.status(200).send(availability);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.deleteAvailability = asyncHandler(async (req, res) => {
  try {
    const availability = await Availability.findByIdAndDelete(req.params.id);
    if (!availability) {
      return res.status(404).send();
    }
    res.status(200).send(availability);
  } catch (error) {
    res.status(400).send(error);
  }
});
