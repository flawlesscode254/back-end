const mongoose = require('mongoose');

const { Schema } = mongoose;

const salesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profit: {
        type: Number,
        required: true
    },
    bitcoin: {
        type: String,
        required: true
    },
    final: {
        type: Number,
        required: true
    },
    original: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    }
);

const salesEntry = mongoose.model('salesSchema', salesSchema);

module.exports = salesEntry;