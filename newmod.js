const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cars = new Schema({
    model: {
        type: String
    }
})

module.exports = mongoose.model('cars', cars);