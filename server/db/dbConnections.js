const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connected")
  } catch (error) {
    console.log("Database Connection error!");
    console.log(error);
  }
};

module.exports = connectdb;
