"use strict";

const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("frontend/public"));

app.get("/", (req, res) => {
  res.sendFile("frontend/public/index.html");
});

app.listen(port, () => {
  console.log(
    `***************************\n
    Server started at http://localhost:${port}`
  );
});
