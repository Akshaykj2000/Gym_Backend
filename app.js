const express = require('express');
const memberRouter=require('./controllers/memberRoute')
const adminRouter=require('./controllers/adminRoute')
const trainerRouter=require('./controllers/trainerRoute')
const packageRouter=require('./controllers/packageRoute')

const app = express();
const port = 3006;

app.use(express.json());

app.use("/api/members",memberRouter)
app.use("/api/admin",adminRouter)
app.use("/api/trainers",trainerRouter)
app.use("/api/packages",packageRouter)

app.listen(port, () => {
  console.log(`Server is running ...`);
});
