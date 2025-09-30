require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const passport = require('passport');
const session = require('express-session');
const localStrategy = require('passport-local').Strategy;
var crypto = require("crypto");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));



app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", { error: err });
});

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }

  console.log("Server is running on http://localhost:3000");
});