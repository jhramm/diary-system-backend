const mongoose = require('mongoose');


const postcodeSchema = new mongoose.Schema({
    areaName: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Postcodes = new mongoose.model('Postcodes', postcodeSchema);
module.exports = Postcodes