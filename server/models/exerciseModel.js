const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.DB_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "bicepcurls",
  })
  .then(() => console.log("Connected to Mongo"))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercise: Number,
  howTo: String,
  img: String,
  name: String,
  reps: Array[Number],
});

const Exercises = mongoose.model("exercises", exerciseSchema);

module.export = {
  Exercises,
};
