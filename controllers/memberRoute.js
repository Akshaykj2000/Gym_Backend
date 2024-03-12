const express = require('express')
const memberModel = require("../models/member")

const router = express.Router()

//route to member register
router.post('/register', (req, res) => {
    memberModel.insertMember(req.body, (error, results) => {
        if (error) {
            res.status(500).send('Error inserting member data' + error)
            return
        }
        res.status(201).send(`Member added with ID : ${results.insertId}`)
    })
})

router.post('/search', (req, res) => {
    var memberName =req.body.name

    memberModel.searchMemberByName(memberName,(error,results)=>{
        if(error){
            res.status(500).send('Error retrieving member data');
            return;
        }
        if(results.length > 0){
            res.status(200).json(results[0]);
        }
        else{
            res.status(404).send('Invalid user');
        }
    });
});

module.exports = router