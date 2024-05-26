const mongoose = require('mongoose');

//Define person schema
const menuItemSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true,
    },
    price:{
        type:Number,
        require:true,
    },
    taste:{
        type: String,
        enum:['Spicy','Sour','Sweet'],
        require: true
    },
    is_drink:{
        type: Boolean,
        default: false,
    },
    ingredients:{
        type: [String],
        default: [],
    },
    num_sales:{
        type: Number,
        default: 0
    }
})

const MenuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports = MenuItem;