

function pull(){
    fetch('http://www.raydelto.org/agenda.php')
    .then(response => response.json())
    .then(res=> {
        return console.log('pull check');

    })
}


