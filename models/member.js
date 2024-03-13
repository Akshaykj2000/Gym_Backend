const mysql=require('mysql')
require("dotenv").config()

//MySQL connection
const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:'',
    database:process.env.DB_NAME
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
    },

    viewMembers:(callback)=>{
        const query='SELECT * FROM members';
        pool.query(query,callback)
    },

    deleteMember:(id,callback)=>{
        const query='DELETE FROM members WHERE id=?';
        pool.query(query,[id],callback)
    },
    
    searchMemberByName: (name,callback) => {
        const query='SELECT * FROM members WHERE name = ?';
        pool.query(query,[name],callback);
    },
    memberLogin:(emailid)=>{
        const query='SELECT emailid,password FROM members WHERE emailid=?';
        pool.query(query,[emailid]);
    },

    viewMyProfile : (id,callback)=>{
        const query = 'SELECT * FROM members WHERE id = ?';
        pool.query(query,[id],callback)
    },
    

};

module.exports=memberModel