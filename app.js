const express = require('express');
const mongoose=require("mongoose")



const member=require("./controller/member")

const app = express();
const port = 3006;

app.use(express.json());

app.use("/api/member",member)

app.listen(port, () => {
  console.log(`Server is running ...`);
});
