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

router.get("/viewpackage",(req,res)=>{
    packageModel.viewPackage((error,results)=>{
        if (error) {
            res.status(500).send('Error fetching packages:'+error)
            return
        }
        res.status(200).json(results)
    })
})

router.post('/deletepackage',(req,res)=>{
    var packageId=req.body.id
    packageModel.deletePackage(packageId,(error,results)=>{
        if (error) {
            res.status(500).send('Error deleting packages: ' + error);
            return;
        }
        res.status(200).send('Package deleted successfully');
    })
})

router.post("/selectpackage",async(req,res)=>{
    let packageid=req.body.id
    packageModel.selectPackage(packageid,(error,results)=>{
        if (error) {
            res.status(500).send('Error selecting packages: ' + error);
            return;
        }
        res.status(200).send('Package selected successfully');
    })
})

router.post("/updatepackage", async (req, res) => {
    let { id, ...rest } = req.body; 
    packageModel.updatePackage(id, rest, (error, results) => { 
        if (error) {
            res.status(500).send('Error updating package: ' + error); 
            return;
        }
        res.status(200).send('Package updated successfully');
    });
});
module.exports=router;