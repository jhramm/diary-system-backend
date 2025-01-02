const mongoose = require('mongoose');

const testCentresSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    centreName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    },
});

const TestCentresSchema = new mongoose.model("TestCentres", testCentresSchema);

module.exports = TestCentresSchema;