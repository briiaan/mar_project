const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const compression = require("compression");
const connect = require("connect");
const path = require('path')
require('dotenv').config()
const auth = require('./routes/auth')
const base = '/'
/*  constants  */
const app = express();
const PORT = process.env.PORT;

app.use(compression())
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet())
console.log('')
app.use(express.static(path.resolve(__dirname, '..', 'dist')))
/* helmetjs configuration */
app.disable('x-powered-by');
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'main.js'))
})
app.use('/', auth)

app.listen(PORT, function() {
    console.log("SERVER IS RUNNING ON PORT " + PORT)
})