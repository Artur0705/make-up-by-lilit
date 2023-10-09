const express = require("express");
const availabilityController = require("../controllers/availabilityController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, availabilityController.addAvailability);
router.get("/", verifyToken, availabilityController.getAvailability);
router.put("/:id", verifyToken, availabilityController.updateAvailability);
router.delete("/:id", verifyToken, availabilityController.deleteAvailability);

module.exports = router;
