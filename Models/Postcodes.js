const mongoose = require('mongoose');


const postcodeSchema = new mongoose.Schema({
    id : {
        type: Number,
        unique: true,
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
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
    },

});

const Postcodes = new mongoose.model('Postcodes', postcodeSchema);
module.exports = Postcodes