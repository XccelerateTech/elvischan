const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());


app.get('/',(req,res,next)=>{
        res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/elvis',(req,res)=>{
        console.log(req.body);
        // console.log(req.files);
        res.send(req.body.password);
        // next();
        res.send(req.body.email);
});

app.listen(8080);
