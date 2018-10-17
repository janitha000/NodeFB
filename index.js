const express = require('express')
const bodyParser = require('body-parser')
const app = express()



app.use((req,res,next) => {
    console.log(req.headers);
    next();
})

app.use(bodyParser.urlencoded({extended : true}))

app.get('/', (req,res) =>{
    res.send("Hello Node.js server");
})

app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).send('Internal server error');
})

const port = process.env.PORT || 3000;

app.listen(port, (err) =>{
    if(err)
        return console.log('Error', err)
    
    console.log('Server is listening at port :' + port);
})