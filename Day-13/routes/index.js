var express = require('express');

var router = express.Router();

var registerInitialChecks = require("../middleware/registerChecks")

var {register,registerSuperAdmin} = require("../controllers/register")

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess=req.session;
  sess.username="mrudula";
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  console.log('Redis value',req.session.username)
  res.render('index', { title: 'Express' });
});


router.post('/register',registerInitialChecks,register);
router.post('/register-super-admin',registerInitialChecks,registerSuperAdmin);
module.exports = router;
