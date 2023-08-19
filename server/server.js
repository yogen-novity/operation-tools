var express = require('express');
const path = require('path');
var app = express();

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/Images'));
app.use(express.static(path.join(__dirname, "js")));


//setting middleware
// app.use(express.static(__dirname + 'public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/data', function (req, res) {
    res.sendFile(path.join(__dirname, 'battalion_platform_v1_7_0_executor_1_7_3.json'));
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
