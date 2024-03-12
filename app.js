const express = require('express');
const memberRouter=require('./controllers/memberRoute')

const app = express();
const port = 3006;

app.use(express.json());

app.use("/api/members",memberRouter)

app.listen(port, () => {
  console.log(`Server is running ...`);
});
