const mysql=require('mysql');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'gymdb'
});

const trainermodel={
    insertTrainer: (trainerData,callback)=>{
        const query='INSERT INTO trainers SET ?';
        pool.query(query,trainerData,callback)
    }
};
module.exports=trainermodel;