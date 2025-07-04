const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const wishSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Wish = mongoose.model("Wish", wishSchema);

// Routes
app.get("/wishes", async (req, res) => {
  const wishes = await Wish.find().sort({ date: -1 });
  res.json(wishes);
});

app.post("/wishes", async (req, res) => {
  const { name, message } = req.body;
  const newWish = new Wish({ name, message });
  await newWish.save();
  res.json(newWish);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));