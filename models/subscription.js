const mysql=require("mysql")
require("dotenv").config()

const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:'',
    database:process.env.DB_NAME

});
const subscribemodel={
    insertsubscription:(subscriptiondata,callback)=>{
    const query='INSERT INTO subscriptions SET ?';
    pool.query(query,subscriptiondata,callback)
},
}
module.exports=subscribemodel;
