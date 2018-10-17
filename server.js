require('dotenv').config();
const app = require('./index');

const port = process.env.PORT || 3000;

app.listen(port, (err) =>{
    if(err)
        return console.log('Error', err)
    
    console.log('Server is listening at port :' + port);
})