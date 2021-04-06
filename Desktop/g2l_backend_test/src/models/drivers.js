const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true

    },
    cpf: {
        type: String,
        required: true

    },
    birthDate: {
        type: Date,
        required: true

    },
    status: {
        type: String,
        default: "active"
    },
    vehicles: {
        type: Array,
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

module.exports = mongoose.model('Driver', driverSchema);