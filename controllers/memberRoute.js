const express=require('express')
const memberModel=require("../models/member")
const bcrypt=require("bcryptjs")

hashPasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

const router=express.Router()

//route to member register
router.post('/signup',async(req,res)=>{
    let{data}={"data":req.body}
    let password=data.password
    const hashedPassword=await hashPasswordgenerator(password)
    data.password=hashedPassword
    let results=memberModel.insertMember(data)
    memberModel.insertMember(req.body,(error,results)=>{
        if (error) {
            res.status(500).send('Error inserting member data'+error)
            return
        }
        res.status(201).send(`Member added with ID : ${results.insertId}`)
    })

    
});

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


router.post('/myprofile',(req,res) => {
    var memberId = req.body.id

    memberModel.viewMyProfile(memberId,(error,results)=>{
        try{
            if (error) {
                console.error('Error fetching user profile:', err);
                return res.status(500).json({
                  status: "Internal Server Error"
                });
              }
              if (results.length === 0) {
                return res.json({
                  status: "Invalid user"
                });
              } else {
                const data = results[0]; // Assuming there is only one matching row
    
                // Prepare response data
                const responseData = {
                  name: data.name,
                  address: data.address,
                  weight: data.weight,
                  height: data.height,
                  emailid: data.emailid,
                  contactno: data.contactNum
                };
    
                console.log(responseData);
    
                return res.json(responseData);
              }
        } catch (error) {
        console.error('Error fetching user profile:', error);
        return res.status(500).json({
          status: "Internal Server Error"
        });
      }
    })
})

module.exports=router