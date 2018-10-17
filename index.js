const express = require('express')
const app = express()

const port = 3000

app.use((req,res,next) => {
    console.log(req.headers);
    next();
})

app.get('/', (req,res) =>{
    res.send("Hello Node.js server");
})

app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).send('Internal server error');
})

app.listen(port, (err) =>{
    if(err)
        return console.log('Error', err)
    
    console.log('Server is listening at port :' + port);
})