const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const compression = require("compression");
const connect = require("connect");
const path = require('path')
const chalk = require('chalk')
require('dotenv').config({path: path.resolve(__dirname, '..', '.env')});
const auth = require('./routes/auth');
const base = '/';

/*  constants  */
const app = express();
const PORT = process.env.PORT;
const log = console.log;

app.use(compression())
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet())
console.log('')
app.use(express.static(path.resolve(__dirname, '..', 'dist')))
/* helmetjs configuration */
app.disable('x-powered-by');
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'app.js'))
})
app.use('/', auth)

app.listen(PORT, function() {
    log(chalk.green.bold('Team Mar Application ALPHA v0.2.3'));
    log(chalk.green.bold('-------------------------------------------'));
    log('\n')

    log(chalk.blue("Application developed by: Brian"))
    log(chalk.blue("Application designed by: Maryam, and Ellen"))
    log(chalk.blue("Documentation maintained by Afnan"))
    log('\n')
    log(chalk.blue.bold('Server is live and running on port ') + chalk.yellow.bold(PORT));})
    log('\n')

