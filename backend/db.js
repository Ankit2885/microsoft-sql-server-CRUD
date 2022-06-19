var mysql = require('mssql/msnodesqlv8');

// this is config object 
var config = {
    // user: 'root',
    // password: '2885',
    database: 'dmc',
    server: 'DESKTOP-JGDDDCN\\SQLEXPRESS',
    driver: 'msnodesqlv8',
    // options use for window authentication only
    options: {
        trustedConnection: true
      }
 };


//  connection to datbase here
const connectToSql = ()=>{
     mysql.connect(config,(err)=>{
        if(err) throw err;
        console.log('connection successfull')
    })
}


module.exports = connectToSql