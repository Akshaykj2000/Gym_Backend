const express = require('express');
const memberRouter=require('./controllers/memberRoute')
const adminRouter=require('./controllers/adminRoute')

const app = express();
const port = 3006;

app.use(express.json());

app.use("/api/members",memberRouter)
app.use("/api/admin",adminRouter)

app.listen(port, () => {
  console.log(`Server is running ...`);
});
