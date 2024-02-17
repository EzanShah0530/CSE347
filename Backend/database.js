import mysql from 'mysql2';
import express from 'express';
const app = express();

// const dbxampp = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     port:3306,
//     database:''
// });

const dbmysqlworkbench = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ezanshah2002',
  port:3360,
  database:'test'
});

  const query =(req,res,next)=>{
    const sql = "SELECT * FROM test1";
    dbmysqlworkbench.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    req.dbresult=results;
    next();
  });
};
const PORT = 3000;
app.get('/',query,(req,res) => {
    const results=req.dbresult;
    res.send(results);
})
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


