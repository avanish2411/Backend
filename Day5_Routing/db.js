const mongoose = require('mongoose');

//connecting to mongodb through url
const mongoUrl = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//events of mongodb : error,connected,disconnected
db.on('connected', () => {
    console.log("Connected to mongo server");
});

module.exports = db;
