import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import compression from "compression";
import connect from "connect";
const auth = require('./routes/auth')
const base = '/'

/*  constants  */
const app = express();
const PORT = process.env.PORT;


app.use(compression())
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet())
app.use(base, express.static(process.cwd() + 'dist/main.js'))
/* helmetjs configuration */
app.disable('x-powered-by');
app.get('/', (req,res) => {
    res.send("TEST")
})
app.use('/', auth)

app.listen(PORT, function() {
    console.log("SERVER IS RUNNING ON PORT " + PORT)
})