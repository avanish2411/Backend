const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./db');    //importing db.js file

const Person = require('./models/person');  //importing person model
const MenuItem = require('./models/menu');  //importing menu model

const bodyParser = require('body-parser') //middle ware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Home page is displayed");
});

app.post('/person', async (req, res) => {
    try {
        const data = req.body; // saving incoming data from client into data
        const newPerson = new Person(data); //creating a object using person model

        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);

    } catch (error) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetch")
        res.status(200).json(data);
    } catch (error) {
        console.log("error")
    }
})

app.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = await new MenuItem(data);
        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal error" });
    }
});

app.get('/menu', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal Server" });
    }
});

app.get('/person/:workType', async (req, res) => {
    try {
        //workType is a parameter that is why we'll use params not body
        const workType = req.params.workType;
        if (workType == 'Chef' || workType == 'Manager' || workType == 'Waiter') {
            const response = await Person.find({ work: workType });
            console.log("data fetched");
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "invalid work type" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, (req, res) => {
    console.log(`node server is live on ${PORT}`);
});