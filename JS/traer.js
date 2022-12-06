

function traer(){
    fetch('http://www.raydelto.org/agenda.php')
    .then(response => response.json())
    .then(res=> {
        return console.log('hola');

    })
}


