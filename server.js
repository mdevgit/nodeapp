var exp = require('express');
var app = exp();

var port = process.env.VCAP_APP_PORT || 8080;


app.get('/', function(req,res){
    res.send("Hello world from NodeJS running on cloudfoundry! <BR/> Process running on port: " + port + " on cf server");
});

app.listen(port);

