const express = require("express");
const cors = require("cors");

const db = require("./config/connection.js");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hello from server");
  res.send("Test from server");
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on PORT:${PORT}`);
  });
});
