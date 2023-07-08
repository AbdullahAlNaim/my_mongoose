const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let info = new Schema({
    information: {
        type: String
    }
})

module.exports = mongoose.model('info', info);