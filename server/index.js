const express = require("express");
const mongoose = require("mongoose");
const nexHomeRouter = require("./Controller/router");
const sellRouter = require("./Controller/router2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

mongoose.set("strictQuery", true);
mongoose.connect(
  // "mongodb+srv://harshsangrulkar:1234@cluster0.8ptiwxj.mongodb.net/?retryWrites=true&w=majority"
  "mongodb+srv://purnasaikrishnainnamuri23:12345@cluster0.q5cu4tp.mongodb.net/NexHome?retryWrites=true&w=majority"
);

var db = mongoose.connection;

db.on("open", () => {
  console.log("Connected to DB");
});
db.on("error", () => {
  console.log("error occured");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use("/nexHome", nexHomeRouter);
app.use("/sell", sellRouter);

app.listen(4000, () => {
  console.log("started at 4000");
});
