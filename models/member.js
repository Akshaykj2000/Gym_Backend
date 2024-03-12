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
    }

};

module.exports=memberModel