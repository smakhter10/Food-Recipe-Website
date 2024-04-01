const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./db/dbConnections");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config({ path: "./config/config.env" });

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
  })
);

connectdb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running!");
  });
});

app.use("/", require("./routes/authRoutes"));
app.use("/api", require("./routes/recipeRoutes"));
