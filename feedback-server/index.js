const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/feedbackDB")
  .then(() => console.log("db connected"))
  .catch((e) => console.log("db connection error:", e));

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String,
  date: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Welcome to our website",
  });
});

app.get("/feedback", (req, res) => {
  res.json({
    status: 200,
    message: db,
  });
});

app.get("/welcome", (req, res) => {
  const name = req.query.name || "Guest";
  res.json({
    status: 200,
    message: `Hello, ${name}`,
  });
});

app.post("/submit", (req, res) => {
  try {
    const { name, email, feedback } = req.body;
    Feedback.create({ name, email, feedback });
    res.json({ status: "success" });
  } catch (e) {
    console.log(error);
    res.json({ staus: "error", e });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running at port http://localhost:${PORT}`);
});
