var express = require('express');
var app = express();
app.get('/home' , function(req , res){
  console.log('running');
  res.end('Hello World!');
});
app.listen(process.argv[2],function(){
  console.log('app started');
});
