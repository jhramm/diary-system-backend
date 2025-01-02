const mongoose = require('mongoose');

const testCentresSchema = new mongoose.Schema({
    centreName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postcodes: {
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