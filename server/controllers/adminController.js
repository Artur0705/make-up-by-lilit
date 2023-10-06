const bcrypt = require("bcrypt");
require("dotenv").config();

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (username !== process.env.ADMIN_USERNAME) {
    return res.status(401).send("Access denied. Invalid username.");
  }

  const validPassword = await bcrypt.compare(
    password,
    await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
  );
  if (!validPassword) {
    return res.status(401).send("Access denied. Invalid password.");
  }

  res.send("Logged in successfully.");
};
