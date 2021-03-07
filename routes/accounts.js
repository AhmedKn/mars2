const express = require("express")
const router=express.Router()
const Accounts = require("../models/Accounts")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const passport=require("passport")


//http://localhost:5000/Mars/Sign-up/
//@desc create account

router.post("/Sign-up",(req,res)=>{

    const {firstname,lastname, email,password,region,acctype } = req.body
    
Accounts.findOne({email}).then((account) =>{
    if (account) return res.sendStatus(409);
    else {
        const accounts = new Accounts({
            firstname,
            lastname,
            email,
            password,
            region,
            acctype 
        })

        //crypt the code

        bcrypt.genSalt(10 , (err , salt) =>{
            bcrypt.hash(password , salt ,(err,hash)=>{
                accounts.password=hash;
                accounts.save()
                .then((newacc) => res.json(newacc))
                .catch((err) => console.error(err))
            })
        })

    }
  
}) 

    .then(result => console.log(result))
    .catch(err => console.log(err))
    })


    //login user !
router.post("/login" , (req , res)=>{
    const {email , password} = req.body;
    Accounts.findOne({email}).then(user =>{
        if(!user) res.sendStatus(404)
        else {
            bcrypt.compare(password,user.password)
            .then(isMatched =>{
                if (isMatched){
                    const payload={id:user._id , firstname : user.firstname , lastname : user.lastname , email:user.email,region:user.region , acctype:user.acctype}
                    jwt.sign(payload , "session" , {expiresIn:3600}, (err ,token)=>{
                        if(err) res.sendStatus(500)
                        else {
                            res.json({token : token})
                        }
                    })
                }else{
                    res.sendStatus(400)
                }
            })
        }
    }).catch(err => res.send('server error'))
})

// validate token
router.get("/validate" , passport.authenticate("jwt" , {session:false}) ,(req,res)=>{
    res.send(req.user)
})

        
module.exports = router