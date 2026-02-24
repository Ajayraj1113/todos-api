const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    await mongoose.connect(url);
    console.log("db connected!!");
  } catch (error) {
    console.log("DB Error: ", error.errmsg);
  }
};

module.exports = connectDB;
