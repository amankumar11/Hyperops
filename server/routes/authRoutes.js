//Routes
const express = require('express')
const User = require("../models/user")
const router = new express.Router()

router.post("/login", (req,res)=>{
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
router.post("/register", (req,res)=>{
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

module.exports = router