const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');  //importing menu model

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal Server" });
    }
});

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'Spicy' || tasteType == 'Sweet' || tasteType == 'Sour') {
            const response = await MenuItem.find({ taste: tasteType });
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

module.exports = router;