const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()


app.use(cors({credentials: true, origin: true}));
app.options('*', cors({credentials: true, origin: true}))


const postRoutes = require('./Routes/postRoutes');
const authRoutes = require('./Controllers/AuthController')
const routes = require('./Routes/routes');

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json({ extended : true}))

app.use('/', routes);

app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).send('Internal server error');
})



module.exports = app

