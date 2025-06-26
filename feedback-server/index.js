const express = require("express");

const app = express();

app.use(express.json());

const db = [
  {
    name: "s",
    emial: "sine@gmail.com",
    desc: ".....",
  },
  {
    name: "d",
    emial: "da@gmail.com",
    desc: ".....",
  },
];

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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running at port http://localhost:${PORT}`);
});
