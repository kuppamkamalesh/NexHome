const express = require("express");
const nexHomeRouter = express.Router();
const nexHomeSchema = require("../model/schema");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

nexHomeRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  nexHomeSchema.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        // res.json("Sucess");
        // const token = jwt.sign({ id: user._id }, "sdfb3404joi5n4h");
        const token = jwt.sign({ id: user._id }, "kafjvjdfv9h43t58b");
        console.log(token);
        const { password: pass, ...rest } = user._doc;
        res
          // .cookie("access_token", token, { httpOnly: true })
          .cookie("access_token", token, { httpOnly: true })
          .status(200)
          // .json(user);
          .json({
            userData: rest,
            msg: "Sucess",
          });
      } else {
        res.json({ msg: "Password is wrong" });
        // res.json("Password is wrong");
      }
    } else {
      res.json({ msg: "Email id is not registered" });
      // res.json("Email id is not registered");
    }
  });
});

nexHomeRouter.post("/create-nexHome", (req, res) => {
  const data = req.body;
  nexHomeSchema.findOne({ email: data.email }).then((user) => {
    if (user) {
      res.json("User already exixts");
    } else {
      nexHomeSchema.create(req.body, (err, data) => {
        if (err) {
          return err;
        } else {
          res.json(data);
        }
      });
    }
  });
});

nexHomeRouter.get("/", (req, res) => {
  nexHomeSchema.find((err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});

module.exports = nexHomeRouter;

/*
app.get()
app.post()
app.put()
app.delete()
--------------------
app.use()
*/
