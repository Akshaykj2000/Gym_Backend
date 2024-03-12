const mysql=require("mysql")

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'gymDB'

});
const packageModel={insertpackage:(packagedata,callback)=>{
    const query='INSERT INTO packages SET ?';
    pool.query(query,packagedata,callback)
}}
module.exports=packageModel;