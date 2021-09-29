var express = require('express');
var router = express.Router();
const Pool=require('pg').Pool;

/* GET users listing. */

const pool=new Pool({
  user:'postgres',
  host:'localhost',
  database:'postgres',
  password:'Pratibha',
  port:5432
})
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM "Users"',(err,result)=>{
    if(err){
      throw err;
    }
    res.status(200).json(result);
  })
  
});


module.exports = router;
