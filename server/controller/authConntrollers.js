const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "asdasdfgsegestetegdsfcxasdfsA";

//---------------- Registration ------------------------------//
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Checking password and name
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Passwor is required and must be 6 characters long",
      });
    }

    // Check Email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exists",
      });
    }

    //Create user
    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//------------------- LOG In ---------------------------------//
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Passwor is required and must be 6 characters long",
      });
    }

    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const checkPass = bcrypt.compareSync(password, userDoc.password);

      if (checkPass) {
        jwt.sign(
          { email: userDoc.email, id: userDoc._id, name: userDoc.name },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(userDoc);
          }
        );
      } else {
        res.json({ error: "Password is not correct" });
      }
    } else {
      res.json("Not Found");
    }
  } catch (error) {
    console.log(error);
  }
};

//------------------ User Profile ------------------------------//
const userProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

//-------------------------- LOG OUT -----------------------------//

const logoutUser = (req, res) => {
  res.cookie("token", "").json("ok");
};

module.exports = {
  registerUser,
  loginUser,
  userProfile,
  logoutUser,
};
