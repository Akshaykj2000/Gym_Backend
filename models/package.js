const mysql=require("mysql")

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'gymdb'

});
const packageModel={
    insertpackage:(packagedata,callback)=>{
    const query='INSERT INTO packages SET ?';
    pool.query(query,packagedata,callback)
    },

    viewPackage:(callback)=>{
        const query='SELECT * FROM packages'
        pool.query(query,callback)
    },
    
    deletePackage:(id,callback)=>{
        const query='DELETE FROM packages WHERE id=?';
        pool.query(query,[id],callback)
    },

    selectPackage:(id,callback)=>{
        const query='SELECT * FROM packages WHERE id=?';
        pool.query(query,[id],callback)
    }
}
module.exports=packageModel;