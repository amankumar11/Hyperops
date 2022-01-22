const express = require('express')
const router = new express.Router()
const isAuth = require("../middleware/auth");
const Booking = require("../models/booking")

router.post('/bookings/new', isAuth, async (req,res) => {
        const booking = new Booking(req.body)
        try{
            await booking.save();
            res.status(201).send(booking)
        }catch(e){
            res.status(400).send(e)
        }


});

router.get('/bookings/all', isAuth, async (req,res) => {
    try{
        const bookings = await Booking.find({})
        res.status(200).send(bookings);
    }
    catch(e)
    {
        res.status(400).send(e);
    }
});

module.exports= router