var express = require('express');
var path= require('path');
var proxy = require('http-proxy-middleware');

var app = express();
const port = process.env.PORT || 5373;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/listing/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
    console.log(`Proxy listening on port ${port}`);
});