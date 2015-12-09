/**
 * Created by bzvolensky on 3. 12. 2015.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('/index.html');
});


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");