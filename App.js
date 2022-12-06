const express = require('express');
const { dirname } = require('path');

const path = require('path');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname +'/index.html'));
});


app.get('/add', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/add.html'));
});

app.get('/cap.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/cap.js'));
});

app.get('/search.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/search.js'));
});

app.get('/pull.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/pull.js'));
});

app.get('/fullList', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/fullList.html'));
});
app.get('/function.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/function.js'));

})

app.listen(3000, ()=>{
    console.log('working', 3000)
});



