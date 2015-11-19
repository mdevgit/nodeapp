var exp = require('express');
var app = exp();

var port = process.env.VCAP_APP_PORT || 8080;


app.get('/', function(req,res){
    res.send("Hello world from NodeJS running on cloudfoundry! <BR/> Process running on port: " + port + " on cf server <BR/>" + "<Br/>Test Travis CI<br><Br><br>Response generated @ " + (new Date()).toString('MMM/dd/yyyy hh:mm:SS'));
});

app.get('/Nirmal', function (req, res) {
    res.send("Hello Nirmal, from NodeJS running on cloudfoundry! <BR/> Process running on port: " + port + " on cf server <BR/>" + "<Br/>Test Travis CI<br><Br><br>Response generated @ " + (new Date()).toString('MMM/dd/yyyy hh:mm:SS'));
});
app.listen(port);

