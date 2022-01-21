const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({ origin: `http://localhost:3000`, credentials: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:3000`);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});




const dbURI = 'mongodb+srv://aman:test1234@nodetuts.98mkn.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, (err) => {
  
    if (err) throw err;
    console.log("Connected to MongoDB");
});



// app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser("hello123"));
app.use(
    session({
      secret: "hello123",
      resave: true,
      saveUninitialized: true,
    })
  );
app.use(passport.initialize());
app.use(passport.session());


app.listen(5000,()=>{
    console.log("Server started at port 5000")
})

app.use(authRoutes);