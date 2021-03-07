const express = require("express")
const router=express.Router()
const PublicCommunity=require("../models/PublicCommunity")


//http://localhost:5000/Mars/public/user/:id/
// @message to forum 

router.post("/user/public/:id",(req ,res)=>{
    const {username , newmessage} = req.body;

    newmessagebd = new PublicCommunity({user : username , message : newmessage});

    newmessagebd.save().then((cust) => res.json(cust)).catch(error => res.sendStatus(400))

})

module.exports = router