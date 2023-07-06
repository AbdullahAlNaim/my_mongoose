const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testdb');

app.get('/', (req, res) => {
    res.send('hekki')
})


app.listen(port, () => {
    console.log(`running on port ${port}`)
})