const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/", contactController.createContact);
router.get("/", verifyToken, contactController.getAllContacts);
router.get("/:id", verifyToken, contactController.getContact);

module.exports = router;
