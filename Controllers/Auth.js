const Instructors = require("../Models/Instructors");
const Pupils = require("../Models/Pupils");
const Clients = require("../Models/Clients");
const Operators = require("../Models/Operators");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const accountType = req.params.accountType;
    const { username, password } = req.body;

    if (accountType === "pupil") {
      const pupil = await Pupils.findOne({ username: username });
      if (pupil) {
        const matchPassword = await bcrypt.compare(password, pupil.password);
        if (matchPassword) {
          return res.status(200).send({ pupil });
        } else {
          return res.status(401).send({ message: "Incorrect password" });
        }
      } else {
        return res.status(404).send({ message: "Pupil not found" });
      }
    } else if (accountType === "instructor") {
      const instructor = await Instructors.findOne({ username: username });
      if (instructor) {
        const matchPassword = await bcrypt.compare(password, instructor.password);
        if (matchPassword) {
          return res.status(200).send({ message: "Logged in successfully" });
        } else {
          return res.status(401).send({ message: "Incorrect password" });
        }
      } else {
        return res.status(404).send({ message: "Instructor not found" });
      }
    } else if (accountType === "client") {
      const client = await Clients.findOne({ userName: username });
      if (client) {
        const matchPassword = await bcrypt.compare(password, client.password);
        if (matchPassword) {
          return res.status(200).send({ message: "Logged in successfully" });
        } else {
          return res.status(401).send({ message: "Incorrect password" });
        }
      } else {
        return res.status(404).send({ message: "Client not found" });
      }
    } else if (accountType === "operator") {
      const operator = await Operators.findOne({ username: username });
      if (operator) {
        const matchPassword = await bcrypt.compare(password, operator.password);
        if (matchPassword) {
          return res.status(200).send({ message: "Logged in successfully" });
        } else {
          return res.status(401).send({ message: "Incorrect password" });
        }
      } else {
        return res.status(404).send({ message: "Operator not found" });
      }
    } else {
      res.status(400).send({ message: "Invalid account type" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred" });
  }
};

module.exports = {
  loginController,
};
