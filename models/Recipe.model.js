const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recepieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  instructions: { type: String, require: true },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingridients: { type: [String] },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: { type: Number, min: 0 },
  isArchaived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
}); // Your code here ...

const Recepie = new mongoose.model("Recepie", recepieSchema);

module.exports = Recepie;
