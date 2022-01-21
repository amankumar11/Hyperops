const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes")

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const dbURI = 'mongodb+srv://aman:test1234@nodetuts.98mkn.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, (err) => {
  
    if (err) throw err;
    console.log("Connected to MongoDB");
});
app.use(authRoutes);


app.listen(5000,()=>{
    console.log("Server started at port 5000")
})

