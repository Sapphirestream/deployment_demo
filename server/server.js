const express = require("express");
const cors = require("cors");

const path = require("path");
// provides file structure manipulation
// allows the server to connect to the html for deployment

const app = express();

app.use(express.json());
// allows express to accept json files

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`We are on port ${port}`);
});
