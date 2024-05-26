const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./db');    //importing db.js file

const bodyParser = require('body-parser') //middle ware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Home page is displayed");
});

//imporing the router files of person
const perosnRoutes = require('./routes/personRoutes');
//using the routers
app.use('/person',perosnRoutes);

//imporing the router files of menu
const menuRoutes = require('./routes/menuRoutes');
//using the routers
app.use('/menu',menuRoutes);


app.listen(PORT, (req, res) => {
    console.log(`node server is live on ${PORT}`);
});