const express=require("express")
const packageModel=require("../models/package")

const router=express.Router()

router.post("/addpackage",(req,res)=>{
    console.log(req.body)
    packageModel.insertpackage(req.body,(error, results)=>{
        if (error) {
            res.status(500).send('Error adding new package'+error);
            return;
          }
          res.status(201).send(`Package added with ID: ${results.insertId}`);
    })
})

module.exports=router;