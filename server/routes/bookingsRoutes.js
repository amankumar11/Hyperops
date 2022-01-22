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

router.post('/bookings/update',isAuth, async (req,res) => {
    try{
        const bookingId = req.body.id
        const booking = await Booking.findOne({_id:bookingId})
        if(booking !== undefined)
        {
            booking.pod = req.body.pod;
            await booking.save();
            res.status(204).send(booking);
        }
        else
        {
            res.status(400).send(JSON.stringify({message:"No Booking Was Found"}));
        }
    }
    catch(e)
    {
        res.status(400).send(e);
    }
});

router.post('/bookings/delete',isAuth, async (req,res) => {
    try{
        const bookingId = req.body.id
        await Booking.remove({_id:bookingId})
        res.status(200).send(JSON.stringify({message:"Booking Deleted Succesfully !"}));
    }
    catch(e)
    {
        res.status(400).send(e);
    }
});

module.exports= router