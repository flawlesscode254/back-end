const mongoose = require('mongoose');

const { Schema } = mongoose;

const logSchema = new Schema({
    number: {
        type: Number,
        required: true,
    },},
    {
        timestamps: true,
});

const LogEntry = mongoose.model('parkingSchema', logSchema);

module.exports = LogEntry;