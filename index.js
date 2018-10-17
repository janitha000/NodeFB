const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const postRoutes = require('./Routes/postRoutes');

app.use(bodyParser.urlencoded({extended : true}))

app.get('/', (req,res) =>{
    res.send("Hello Node.js server");
})

app.use('/post', postRoutes);

app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).send('Internal server error');
})

module.exports = app

