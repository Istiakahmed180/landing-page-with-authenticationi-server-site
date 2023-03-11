const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const dataCheck = [];

app.get("/", (req, res) => {
  res.send("Landing Page With Authentication Server Running");
});

app.get("/check_generator", (req, res) => {
  if (dataCheck.includes(req.ip)) {
    res.send({ success: false, error: "Your already use our free service" });
  } else {
    res.send({ success: true });
    dataCheck.push(req.ip);
  }
});

app.listen(port, () => {
  console.log(
    `Landing Page With Authentication Server Running On Port: ${port}`
  );
});
