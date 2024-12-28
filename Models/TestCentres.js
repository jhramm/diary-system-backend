const mongoose = require('mongoose');

const testCentresSchema = new mongoose.Schema({
    centreName: {
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
    }
});

const TestCentresSchema = new mongoose.model("TestCentres", testCentresSchema);

module.exports = TestCentresSchema;