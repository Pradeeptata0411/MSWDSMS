const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect("mongodb+srv://admin12:admin12@cluster0.zuemblk.mongodb.net/?retryWrites=true&w=majority",
  {useNewUrlParser: true, },()=>console.log("Connected to DB"));
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};