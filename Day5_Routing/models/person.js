const mongoose = require('mongoose');

//Define person schema
const personSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        // enum is hamko fill krne ke lia limited choice hoga
        //eska use gender(male/female),etc me use krte hai
        //agr esko chhod ke kuch or likha hoga to db accept nhi krega
        enum: ['Chef', 'Waiter', 'Manager'],
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        require: true,
    }
});

// Creating Person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;
