const express = require('express');
const { dirname } = require('path');

const path = require('path');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname +'/index.html'));
});


app.get('/agregar', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/agregar.html'));
});

app.get('/capturar.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/capturar.js'));
});

app.get('/Buscar.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/Buscar.js'));
});

app.get('/traer.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/traer.js'));
});

app.get('/listacompleta', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/listacompleta.html'));
});
app.get('/function.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/function.js'));

})

app.listen(3000, ()=>{
    console.log('funcionando xd', 3000)
});



