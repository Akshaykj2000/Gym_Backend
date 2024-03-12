const express=require("express")
const subscribemodel=require("../models/subscription")

const router=express.Router()

router.post("/subscribe",(req,res)=>{
    console.log(req.body)
    subscribemodel.insertsubscription(req.body,(error,result)=>{
        if(error){
            res.status(500).send('Error subscribing'+error);
            return;
        }
        res.status(201).send(`subscribed package with ID: ${result.insertId}`);
    })
})
module.exports=router;