const mysql=require("mysql")
require("dotenv").config()

const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT

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
    },

    updatePackage: (id, newData, callback) => {
        const query = 'UPDATE packages SET packageName = ?, packagePrice = ?, packageDuration = ?, packageDescription = ? WHERE id = ?';
        const { packageName, packagePrice, packageDuration, packageDescription } = newData;
        pool.query(query, [packageName, packagePrice, packageDuration, packageDescription, id],callback) 
    }
}
module.exports=packageModel;