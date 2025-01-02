const mongoose = require('mongoose');


const postcodeSchema = new mongoose.Schema({

    id : {
        type: Number,
        required: true,
        unique: true
    },
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