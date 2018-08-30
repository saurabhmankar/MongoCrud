var express = require('express');
var router = express.Router();
var fs=require('fs');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
router.get('/home', function (req, res, next) {
  res.render('../public/form.html');


});
router.get('/productlist',function(req,res,next){
  fs.readFile('Store.txt',data);
  return data;
  res.render('../public/list.html');
})

router.post('/submitform',function (req, res, next) {
   var data = req.body;
   
   console.log(JSON.stringify(data));
   var id=makeid();
   data['id']=id;
   fs.appendFile('Store.txt',JSON.stringify(data));
   
  
   
  
})

router.get('/delet',function(req,res,next){
  var id=req.param('id');
  console.log(id);
  
  //fs.unlink('Store.json'+id);
})

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


module.exports = router;
