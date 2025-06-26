const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Welcome",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running at port http://localhost:${PORT}`);
});
