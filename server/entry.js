const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const compression = require("compression");
const connect = require("connect");
const path = require('path')
const chalk = require('chalk')
const User = require('./db/models/User')
const crypto = require('crypto')
let mongoose = require('mongoose')
const connectDb = require('./db/connect')
require('dotenv').config({path: path.resolve(__dirname, '..', '.env')});
const base = '/';

/*  constants  */
const app = express();
const PORT = process.env.PORT;
const log = console.log;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(compression())
app.use(helmet())
console.log('')
app.use(express.static(path.resolve(__dirname, '..', 'dist')))
/* helmetjs configuration */
app.disable('x-powered-by');
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'App.js'))
})
app.post('/signup', async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: crypto.createHash('sha256').update(req.body.password).digest('hex')
        })
        await user.save();
        console.log('User saved', user);
    } catch(err) {
        console.log(err);

    }
    console.log(req.body);
    res.status(200).send('test')
})
app.post('/login', (req,res) => {
    res.send('test')
})

app.listen(PORT, function() {
    log(chalk.green.bold('Team Mar Application ALPHA v0.2.3'));
    log(chalk.green.bold('-------------------------------------------'));
    log('\n')

    log(chalk.blue("Application developed by: Brian, Maryam, & Ellen"))
    log(chalk.blue("Application designed by: Maryam, and Ellen"))
    log(chalk.blue("Documentation maintained by Afnan"))
    log('\n')
    log(chalk.blue.bold('Server is live and running on port ') + chalk.yellow.bold(PORT));})
    log('\n')

