const express=require('express')
const memberModel=require('../models/member')

const router=express.Router()

//route to update register
router.post('/approve',(req,res)=>{
    var memberId=req.body.id
    memberModel.updateMember(memberId,(error,results)=>{
        if (error) {
            res.status(500).send('Error updating payment status: '+error)
            return
        }
        res.status(201).send(`Payment status updated successfully`)
    })
})

module.exports=router