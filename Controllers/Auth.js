const Instructors = require("../Models/Instructors");
const Pupils = require("../Models/Pupils");
const Clients = require("../Models/Clients");
const Operators = require("../Models/Operators");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const accountType = req.params.accountType;
    const { username, password } = req.body;

    console.log("Account Type:", accountType);
    console.log("Username:", username);

    let user = null;

    if (accountType === "pupil") {
      user = await Pupils.findOne({ username: username });
    } else if (accountType === "instructor") {
      user = await Instructors.findOne({ username: username });
    } else if (accountType === "client") {
      user = await Clients.findOne({ username: username });
    } else if (accountType === "operator") {
      user = await Operators.findOne({ username: username });
    } else {
      return res.status(400).send({ message: "Invalid account type" });
    }

    if (!user) {
      return res.status(404).send({ message: `${accountType} not found` });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(401).send({ message: "Incorrect password" });
    }

    return res.status(200).send({ message: "Logged in successfully" });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "An error occurred" });
  }
};

module.exports = {
  loginController,
};
