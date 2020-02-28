const express = require ('express')
var sleep = require('system-sleep');
let app = express();
app.use(express.json())


app.use('/',api=express.Router());
require('./routes/api')(api,sleep)

app.listen(5000,()=>{
    console.log("connection done with 5000")
});

