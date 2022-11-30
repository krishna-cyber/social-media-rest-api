const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
//Configuring enviromental variable
dotenv.config();
//creating an express server
const app = express();
//Database connection with mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
//using middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//using routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//listening to the requests and server running at port 3000
app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Backend server is running 🚀🍖🔥🔥");
});
