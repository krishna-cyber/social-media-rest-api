const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Backend server is running 🚀🍖🔥🔥");
});
