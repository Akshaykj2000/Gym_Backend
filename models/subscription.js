const mysql=require("mysql")

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'gymDB'

});
const subscribemodel={
    insertsubscription:(subscriptiondata,callback)=>{
    const query='INSERT INTO subscriptions SET ?';
    pool.query(query,subscriptiondata,callback)
},
}
module.exports=subscribemodel;
