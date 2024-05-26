const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
    res.send("Hello in the world of backend.");
});
app.get('/nonveg', function (req, res) {
    var chicken = {
        name : "handi",
        size : "full",
        quantity : 2
    };
    // res.send("Welcome to nonveg page.");
    res.send(chicken);
});

app.listen(PORT, function (req, res) {
    console.log("Port is listing");
});