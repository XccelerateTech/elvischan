const express = require('express');
const path = require('path');
const app = express();

app.post('/elvis',(req,res)=>{
    console.log(req);
    res.sendFile(path.join(__dirname,'app.txt'));
});

app.listen(8080);
