const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const dbURI = 'mongodb+srv://aman:test1234@nodetuts.98mkn.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI), {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () => {
    console.log("DB connected")
}

// mongoose.connect(dbURI)
//     .then((result) => app.listen(3000))
//     .catch((err) => console.log(err));

//Routes
app.post("/login", (req,res)=>{
    const {email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({message:"Login Successfull", user: user})
            }
            else{
                res.send({message:"Enter correct password"});
            }
        } 
        else{
            res.send({message:"User not registered"});
        }
    })
})
app.post("/register", (req,res)=>{
    const {name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"});
        }
        else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err){
                    res.send(err)
                } else{
                    res.send({message: "Successfully Registered"})
                }
            })
        }
    })
    
})

app.listen(5000,()=>{
    console.log("server started at port 5000")
})

//user schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//Model
const User = new mongoose.model("User", userSchema)