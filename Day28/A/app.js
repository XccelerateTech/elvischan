const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.engine('handlebars' , hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    res.render('index')

});

app.get('/otherPage', (req, res) => {

    res.render('other', { layout: "otherPage" })
});

const menu = {

    menu: [

        {

        "name": "elvis"

        },

        {

        "name": "tim"

        },

        {


        "name": "gay"

        },

        {

        "name": "troll"

        }

    ]

};

app.get('/menu', (req, res) =>{

    res.render('menu', menu);

});

app.listen(8080, () => {

    console.log(`App is listening to port 8080`);
});