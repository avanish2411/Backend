const express = require('express');
const router = express.Router();
const Person = require('../models/person');  //importing person model

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetch")
        res.status(200).json(data);
    } catch (error) {
        console.log("error")
    }
});

router.get('/:workType', async (req, res) => {
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

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; //esse hamko url me dia hua id mila
        const updatedPersonDate = req.body; //esse hamko user ka sara data mila

        const response = await Person.findByIdAndUpdate(personId, updatedPersonDate, {
            new: true, //return updated documents
            runValidators: true  //run mongoose validation of the model
        });

        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }

        console.log("data updated");
        res.status(200).json(response);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }

        console.log("data deleted");
        res.status(200).json({msg:"Person deleted successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;