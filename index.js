/*var pointer = 0;
var life = 3;
let numLength = 0;
let cnt = 0;
let index = new Array();
let items = new Array();
let counter = 0;*/

const express = require('express')
//require('./db/mongoose')
//const routers = require('./routes.js')
const path = require('path');

const app = express()
const port = process.env.PORT || 3006


app.use('/index', express.static(path.join(__dirname, 'index.html')));
app.use('/index1', express.static(path.join(__dirname, 'index1.html')));
/*app.use('/lecturer', express.static(path.join(__dirname, 'client/html/Lecturer.html')));
app.use('/lecturers', express.static(path.join(__dirname, 'client/html/lecturer_list.html')));
app.use('/lecturerconference', express.static(path.join(__dirname, 'client/html/add_lecture.html')));*/

app.use('/css', express.static(path.join(__dirname, 'index/css')));
app.use('/css', express.static(path.join(__dirname, 'index1/css')));
app.use('/js', express.static(path.join(__dirname, 'index1/js')));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//app.use('/', routers);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



/*const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/


/*
//כשמבקשים פרטים על משתמש אחד מוצגים לו כל הפרטים
app.get('/api/get-user-datails', (req, res) => {
    for(let i=0; i<items.length; i++){
        if(items[i].name == req.body)
        res.send(items);
    }
    res.send("NotExists");
});
/*
app.get('/api/get-high-score', (req, res) => {
    for(let i=0; i<items.length; i++){
        if(items[i].name == req.body)
        res.send(items[i].highScore);
    }
});

app.post('/api/update-new-user', (req, res) => {
    items[items.length].name = req.body.name;
    items[items.length].highScore = req.body.highScore;
    res.send("200 ok");
});

app.post('/api/update-high-score', (req, res) => {
    for(let i=0; i<items.length; i++){
        if(items[i].name == req.body.name)
            items[i].highScore = req.body.highScore;
            break;
    }
    res.send("200 ok");
});*/

