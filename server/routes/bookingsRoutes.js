const express = require('express')
const router = new express.Router()
const isAuth = require("../middleware/auth");
const Booking = require("../models/booking")
const nodemailer = require('nodemailer');

  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hyperops217531@gmail.com',
        pass: 'Hyperops@217531'
    }
});




router.post('/bookings/new', isAuth, async (req,res) => {
        const booking = new Booking(req.body)
        let mailDetails = {
            from: 'hyperops217531@gmail.com',
            to: booking.email,
            replyTo:'hyperops217531@gmail.com',
            subject: `Virgin Hyperloop Ticket To ${booking.city} confirmed !`,
            html: ` <div style="  max-width: 1000px; padding: 30px; color: aliceblue;background-repeat: no-repeat;background-image:linear-gradient( #230342d2 100%, #2303423f 100%),url(https://i.ibb.co/zV66Hpd/Pod1-76bf3238.png)">   
            <h2>Thanks ${booking.name} ! <br></br>
            Your booking is confirmed. </h2> <br></br>
            <br></br>
            <br></br>
            <b>Destination:</b> ${booking.city} <br></br>
            <b>Pod Number:</b> ${booking.pod} <br></br>
            <b>Your mode of transportation:</b> ${booking.transportMode}. <br></br>
            <br></br>
            <p style="color:black">
            Note: <br></br>
            1. Check the schedule on the website for station number and other details. <br></br>
            2. If your mode of transportation is Taxi or simply want to exit, use gate A, gate B for basement parking and gate C for the nearest metro station. <br></br>
            </p>
            <br></br>
            Have a happy and safe journey !<br></br>
            Regards,<br></br>
            Hyperops Team-HO-217531<br></br>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virgin_Hyperloop_One_Logo.png/1200px-Virgin_Hyperloop_One_Logo.png"/>
            </div>
            `
            
        };
        try{
            await booking.save();
            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log('Error Occured In Sending The Email !');
                } else {
                    console.log(data);
                    console.log('Email sent successfully !');
                }
            });

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
        res.status(200).send(JSON.stringify({message:"Booking Deleted Successfully !"}));
    }
    catch(e)
    {
        res.status(400).send(e);
    }
});

module.exports= router