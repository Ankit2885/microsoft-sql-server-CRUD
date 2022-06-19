const express = require('express');
const app = express();
const port = process.env.PORT || 8055;
const connectToSql = require('./db')
var sql = require('mssql/msnodesqlv8');
var cors = require('cors')

// this 2 line handel http request with this line you can't do get or post request 
app.use(cors())
app.use(express.json())

// database connection function
connectToSql();

//  get data from database
app.get('/', (req,res) => {
    var request = new sql.Request();
  const query = `select * from student`
  request.query(query, (err,result) => {
    if (err) throw err;
    console.log('get data from database succesfully')
    res.send(result)
  })
})


// insert data into database
app.post('/createuser', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const mobile = req.body.mobile;
  console.log(req.body);

  var request = new sql.Request();
  const query = `insert into student (name,email,password,mobile) values ('${name}','${email}','${password}','${mobile}')`
  request.query(query, (err) => {
    if (err) throw err;
    console.log('inserted succesfully')
  })

});



app.listen(port, () => {
  console.log(`your server run on port http://localhost:${port}`)
});