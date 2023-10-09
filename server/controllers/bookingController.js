const Booking = require("../models/bookingModel");
const Availability = require("../models/availabilityModel");
const asyncHandler = require("express-async-handler");

exports.createBooking = asyncHandler(async (req, res) => {
  try {
    const { slot: slotId } = req.body;
    console.log(slotId);
    const availability = await Availability.findOne({ "slots._id": slotId });

    if (!availability) {
      console.error("Slot not found");
      return res.status(404).send("Slot not found");
    }

    const slot = availability.slots.id(slotId);

    if (slot.isBooked) {
      console.error("Slot is already booked");
      return res.status(400).send("Slot is already booked");
    }

    const booking = new Booking(req.body);
    await booking.save();

    slot.isBooked = true;
    await availability.save();

    res.status(200).send(booking);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

exports.getBookings = asyncHandler(async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).send(bookings);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.updateBooking = asyncHandler(async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking) {
      return res.status(404).send();
    }
    res.status(200).send(booking);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.deleteBooking = asyncHandler(async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).send();
    }
    res.status(200).send(booking);
  } catch (error) {
    res.status(400).send(error);
  }
});
