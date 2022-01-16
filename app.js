const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/SolarHub-Discourse/user", require("./Routers/userRouter"));
app.use("/SolarHub-Discourse/post", require("./Routers/postRouter"));
module.exports = app;
