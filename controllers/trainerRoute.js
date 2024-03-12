const express=require("express")
const trainermodel=require("../models/trainer");
const { error } = require("console");

const router=express.Router()

router.post('/addtrainer', (req, res) => {
    console.log(req.body)
  trainermodel.insertTrainer(req.body, (error, results) => {
    if (error) {
      res.status(500).send('Error adding new trainer'+error);
      return;
    }
    res.status(201).send(`Trainer added with ID: ${results.insertId}`);
  });
});

router.get('/viewtrainers',(req,res)=>{
  trainermodel.viewTrainers((error,results)=>{
    if(error){
      res.status(500).send('Error fetching trainers:'+error)
      return
    }
    res.status(200).json(results);
  })
})


module.exports=router;