var express = require('express');
var path= require('path');
const cors = require('cors');
// var proxy = require('http-proxy-middleware');

var app = express();
const port = 8081;
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/listing/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
    console.log(`Proxy listening on port ${port}`);
});