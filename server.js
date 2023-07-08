const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
let info = require('./models');
const router = express.Router();
let bodyparser = require('body-parser');
mongoose.connect('mongodb://127.0.0.1/testdb')
let dbc = mongoose.connect('mongodb://127.0.0.1/testdb');


app.use(express.static('scripts'));

app.use(express.static('style'));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.post('/mongodb://127.0.0.1', function (req, res) {
    dbc.then(function (db) {
        //delete req.body._id; //for safety
        db.collection('infos').insertOne(JSON.stringify(req.body));
    });
    res.send('Data recieved: \n' + JSON.stringify(req.body));
});




app.listen(port, () => {
    console.log(`running on port ${port}`)
})