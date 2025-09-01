const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Ngrok is working 🚀");
});

app.listen(5500, "0.0.0.0", () => {
  console.log("Server running on http://localhost:5500");
});
