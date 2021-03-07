const express = require("express")
const router=express.Router()
const ScieCommunity=require("../models/ScieCommunity")


//http://localhost:5000/Mars/user/scientists/:id/
// @message to forum 

router.post("/user/scientists/:id",(req ,res)=>{
    const {username , newmessage} = req.body;

    newmessagebd = new ScieCommunity({user : username , message : newmessage});

    newmessagebd.save().then((cust) => res.json(cust)).catch(error => res.sendStatus(400))

})

module.exports = router