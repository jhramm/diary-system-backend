const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema({
    userAdding: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String, 
    },
    pupil: {
        type: String,
    },
    hours: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
        required: true
    },
    received: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String,
        default: ""
    }
});


const Transactions = new mongoose.model("Transactions", transactionSchema);

module.exports = Transactions;