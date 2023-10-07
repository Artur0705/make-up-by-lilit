const express = require("express");
const cors = require("cors");

const db = require("./config/connection.js");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

const adminRoutes = require("./routes/adminRoutes");
const servicesRoutes = require("./routes/servicesRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  console.log("Hello from server");
  res.send("Test from server");
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on PORT:${PORT}`);
  });
});
