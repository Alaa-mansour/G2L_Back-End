const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true

    },
    renavam: {
        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Vehicle', vehicleSchema);