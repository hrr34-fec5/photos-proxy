var express = require('express');
var app = express();
var path= require('path');
var proxy = require('http-proxy-middleware');
const port = 5373;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/listing/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
    console.log(`Proxy listening on port ${port}`);
});