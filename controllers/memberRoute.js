const express=require('express')
const memberModel=require("../models/member")

const router=express.Router()

//route to member register
router.post('/register',(req,res)=>{
    memberModel.insertMember(req.body,(error,results)=>{
        if (error) {
            res.status(500).send('Error inserting member data'+error)
            return
        }
        res.status(201).send(`Member added with ID : ${results.insertId}`)
    })
})

module.exports=router