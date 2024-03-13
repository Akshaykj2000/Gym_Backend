const mysql=require('mysql');
require("dotenv").config()

const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:'',
    database:process.env.DB_NAME
});

const trainermodel={
    insertTrainer: (trainerData,callback)=>{
        const query='INSERT INTO trainers SET ?';
        pool.query(query,trainerData,callback)
    },

    viewTrainers:(callback)=>{
        const query='SELECT * FROM trainers';
        pool.query(query,callback)
    }

};

module.exports=trainermodel;