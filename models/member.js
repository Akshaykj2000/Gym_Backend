const mysql=require('mysql')

//MySQL connection
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'gymDB'
});

const memberModel={
    insertMember:(memberData,callback)=>{
        const query='INSERT INTO members SET ?';
        pool.query(query,memberData,callback)
    },
    
    updateMember:(id,callback)=>{
        const query='UPDATE members SET paymentStatus = ? WHERE id = ?';
        const values=['Paid',id];
        pool.query(query,values,callback)
    }
};

module.exports=memberModel