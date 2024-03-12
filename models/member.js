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
        pool.query(query,memberData,callback);
    },

    searchMemberByName: (name,callback) => {
        const query='SELECT * FROM members WHERE name = ?';
        pool.query(query,[name],callback);
    }


};

module.exports=memberModel;